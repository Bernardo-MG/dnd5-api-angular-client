import { TestBed } from '@angular/core/testing';
import { PaginationRanges } from './pagination-ranges';

describe('PaginationRanges', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    // Minimal values

    it('should create no data for an empty pagination', () => {
        const ranges = new PaginationRanges(0, 0);

        expect(ranges.left).withContext('Left range should be empty').toEqual([]);
        expect(ranges.center).withContext('Center range should be empty').toEqual([]);
        expect(ranges.right).withContext('Right range should be empty').toEqual([]);
    });

    it('should create only the left range for the minimal pagination', () => {
        const ranges = new PaginationRanges(1, 1);

        expect(ranges.left).withContext('Left range should contain the first page').toEqual([1]);
        expect(ranges.center).withContext('Center range should be empty').toEqual([]);
        expect(ranges.right).withContext('Right range should be empty').toEqual([]);
    });

    // Extremes

    it('should create both extremes when pointing to the first page', () => {
        const ranges = new PaginationRanges(1, 10);

        expect(ranges.left).withContext('Left range should contain the first pages').toEqual([1, 2, 3]);
        expect(ranges.center).withContext('Center range should be empty').toEqual([]);
        expect(ranges.right).withContext('Right range should contain the last pages').toEqual([8, 9, 10]);
    });

    it('should create both extremes when pointing to the last page', () => {
        const ranges = new PaginationRanges(10, 10);

        expect(ranges.left).withContext('Left range should contain the first pages').toEqual([1, 2, 3]);
        expect(ranges.center).withContext('Center range should be empty').toEqual([]);
        expect(ranges.right).withContext('Right range should contain the last pages').toEqual([8, 9, 10]);
    });

    // Center range

    it('should create all ranges when pointing to the middle page', () => {
        const ranges = new PaginationRanges(10, 20);

        expect(ranges.left).withContext('Left range should contain the first pages').toEqual([1, 2, 3]);
        expect(ranges.center).withContext('Center range should be empty').toEqual([8, 9, 10, 11, 12]);
        expect(ranges.right).withContext('Right range should contain the last pages').toEqual([18, 19, 20]);
    });

});