
export class PaginationRanges {

    public left: number[] = [];

    public center: number[] = [];

    public right: number[] = [];

    private step = 2;

    constructor(page: number, pages: number) {
        if (pages > 0) {
            // Can't build info for empty pages

            // Left range
            // From 1 up to (step + 1)
            this.left = this.getLeftRange(pages);

            const lower = this.step + 1;
            const upper = pages - this.step;

            // Left range
            if ((lower < page) && (page < upper)) {
                // From (current - step) up to (total pages - step)
                // Only if current is between the outer ranges limits
                this.center = this.getCenterRange(page, pages);
            }

            // Left range
            // From (total pages - step) up to total pages
            this.right = this.getRightRange(pages);
        }
    }

    private getLeftRange(pages: number): number[] {
        const range: number[] = [];
        let lower;
        let upper;

        lower = 1;

        // Valid page with highest value
        upper = this.step + 1;
        if (upper > pages) {
            upper = pages;
        }

        for (let i = lower; i <= upper; i++) {
            range.push(i);
        }

        return range;
    }


    private getCenterRange(page: number, pages: number): number[] {
        const range: number[] = [];
        const offset = this.step;
        let lower;
        let upper;

        // Valid page with lowest value
        lower = page - this.step;
        if (lower < offset) {
            lower = offset;
        }

        // Valid page with highest value
        upper = page + this.step;
        if (upper > pages) {
            upper = pages;
        }

        for (let i = lower; i <= upper; i++) {
            range.push(i);
        }

        return range;
    }

    private getRightRange(pages: number): number[] {
        const range: number[] = [];
        const offset = (this.step * 2 + 1);
        let lower;
        let upper;

        // Valid page with lowest value
        lower = pages - this.step;
        if (lower < offset) {
            lower = offset;
        }

        upper = pages;

        for (let i = lower; i <= upper; i++) {
            range.push(i);
        }

        return range;
    }

}