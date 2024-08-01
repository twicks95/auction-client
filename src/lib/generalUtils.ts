export function addZero(num: number) {
    return num.toString().padStart(2, "0") // if target string is not 2 characters, fill with 0 at the beginning
}

export function determineUnit(number: number): string {
    if (number === 0) {
        return "zero" // Handle the case of 0
    }

    const units = ["hundred", "thousand", "million", "billion", "trillion"]
    let unitIndex = 0
    let divisor = 100 // Initial divisor for hundreds

    while (Math.abs(number) >= divisor && unitIndex < units.length) {
        const remainder = Math.abs(number) % divisor
        console.log({ abs: Math.abs(number), remainder })
        if (remainder !== 0) {
            break
        }
        number /= divisor // Divide by the unit
        unitIndex++
        divisor *= 100 // Increase divisor for next unit
    }

    return number >= 0 ? units[unitIndex - 1] : `negative ${units[unitIndex - 1]}` // Handle negative numbers
}

export function formatDisplayCurrency(value: number) {
    return new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 2,
    })
        .format(value)
        .split(/\s+/)[1] // remove 'Rp' prefix
}

export function capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(str: string) {
    const result = str
        .split("_") // Splits the input string into an array of words, handling multiple spaces between words.
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    console.log(result)
    return result
}
