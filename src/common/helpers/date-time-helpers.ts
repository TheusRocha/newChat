import { DateTime } from 'luxon'

export const isToday = (dateTime: DateTime) =>
  DateTime.now().toLocaleString(DateTime.DATE_SHORT) ===
  dateTime.toLocaleString(DateTime.DATE_SHORT)

export const sameMinute = (dateTimes: DateTime[]) =>
  dateTimes.every(
    (dt, i) =>
      !dateTimes[i - 1] ||
      dt.toLocaleString(DateTime.DATETIME_MED) ===
        dateTimes[i - 1].toLocaleString(DateTime.DATETIME_MED)
  )
