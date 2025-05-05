import { fileURLToPath } from 'url';
import * as path from 'path';
import axios from 'axios'
import dayjs from 'dayjs'
import * as fs from 'fs'
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js"
import * as cheerio from 'cheerio';

dayjs.extend(isSameOrBefore)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GET_CALENDAR_ENTRIES_URL = 'https://kulturaliskozpont.com/simple_blog/simple_blog/getCalendarEntries?id=null&start={start-date}&end={end-date}'

const EXPERIENCES_FILE = path.resolve(__dirname, '../src/content/fixed-pages/experiences.json')

async function main() {
    const pageEvents = await extractEventsFromPage()

    const storedEvents = extractEventsFromStorage()

    const mergedEvents = mergeEvents(pageEvents, storedEvents)

    storeMergedEvents(mergedEvents)
}

async function extractEventsFromPage() {
    const startDate = dayjs().format('YYYY-MM-DD')
    const endDate = dayjs().add(30, "day").format('YYYY-MM-DD')
    const getEntriesUrl = GET_CALENDAR_ENTRIES_URL.replace(
        '{start-date}', startDate
    ).replace(
        '{end-date}', endDate
    )

    console.log(getEntriesUrl)

    const response = await axios.get(getEntriesUrl)
    const pageText = response.data

    const $ = cheerio.load(pageText)
    
    const events = []
    $('.post-item').each((i, postItem) => {
        const dateItem = $(postItem).find('.meta_date')
        if (!dateItem) {
            return
        }

        const dateText = dateItem.text().trim()

        let date = null
        try {
            date = dayjs(dateText)
            if (Number.isNaN(date.day())) {
                return
            }
        } catch {
            return
        }

        if (date.isBefore(startDate)) {
            return
        }

        const titleItem = $(postItem).find('h4')
        if (!titleItem) {
            return
        }

        const titleText = titleItem.text().trim()
        if (titleText.toLowerCase().includes('bérlet')) {
            return
        }

        const linkItem = $(postItem).find('.more-btn')
        if (!linkItem) {
            return
        }

        const link = linkItem.attr('href')

        events.push({
            title: titleText,
            date,
            link: 'https://kulturaliskozpont.com' + link,
            manual: false,
        })
    })

    return events
}

function extractEventsFromStorage() {
    const experiences = JSON.parse(fs.readFileSync(EXPERIENCES_FILE, 'utf8'))

    return experiences.events.map(evt => {
        return {
            title: evt.title,
            date: dayjs(evt.date),
            manual: evt.manual,
            link: evt.link,
        }
    })
}

function mergeEvents(pageEvents, storedEvents) {
    const storedManualEvents = storedEvents.filter(evt => evt.manual)

    const allEvents = [
        ...pageEvents,
        ...storedManualEvents
    ]

    allEvents.sort((a, b) => {
        return a.date.isSameOrBefore(b)
    })

    return allEvents
}

function storeMergedEvents(events) {
    const experiences = JSON.parse(fs.readFileSync(EXPERIENCES_FILE, 'utf8'))

    experiences.events = events.map(evt => {
        return {
            title: evt.title,
            date: evt.date.toISOString(),
            manual: evt.manual,
            link: evt.link,
        }
    })

    fs.writeFileSync(EXPERIENCES_FILE, JSON.stringify(
        experiences,
        null,
        2
    ))
}

main()
