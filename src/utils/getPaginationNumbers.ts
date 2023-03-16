const SHOW_ALL_PAGES = 10
const VISIBLE_BORDER = 2

export function getPaginationNumbers(countOfPages:number, currentPageNumber:number) {
    if (countOfPages <= SHOW_ALL_PAGES) {
        return {
            firstPart: Array.from({length: countOfPages}, (_, i) => i + 1),
            secondPart: [],
            thirdPart: []
        }
    }

    const start = currentPageNumber - VISIBLE_BORDER
    const end = currentPageNumber + VISIBLE_BORDER

    let firstPart:number[] = []
    let secondPart:number[] = []
    let thirdPart:number[] = []

    const isCurrentPageInTheMiddle = start > 3 && countOfPages - end > 3
    const isCurrentPageNearFromEnd = countOfPages - end <= 3
    const isCurrentPageNearFromStart = start <= 3

    if (isCurrentPageInTheMiddle) {
        return {
            firstPart: [1, 2],
            secondPart: [
                currentPageNumber - 2, 
                currentPageNumber - 1, 
                currentPageNumber, 
                currentPageNumber + 1, 
                currentPageNumber + 2
            ],
            thirdPart: [countOfPages - 1, countOfPages]
        }
    }

    if (isCurrentPageNearFromStart) {
        return {
            firstPart: Array.from({length: currentPageNumber + VISIBLE_BORDER}, (_, i) => i + 1),
            secondPart: [countOfPages - 1, countOfPages],
            thirdPart
        }
    }

    if (isCurrentPageNearFromEnd) {
        const secondPartLength = countOfPages - currentPageNumber + VISIBLE_BORDER + 1
        return {
            firstPart: [1, 2],
            secondPart: Array.from({length: secondPartLength}, (_, i) => currentPageNumber - VISIBLE_BORDER + i),
            thirdPart
        }
    }

    return {
        firstPart,
        secondPart,
        thirdPart,
    }
}
