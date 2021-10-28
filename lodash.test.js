const { expect } = require('@jest/globals');
const _ = require('./lodash.js');

describe('test arrays methods', ()  => {
    it('should be array with arrays where length of the first array is n', () => {
        expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
          ['a', 'b'],
          ['c', 'd'],
        ]);
        expect(_.chunk(['19', '20', '21', '444'], 3)).toEqual([
            ['19', '20', '21'],
          ['444'],
        ]);
        expect(_.chunk([1, 2, 3], 0)).toStrictEqual([]);
        expect(_.chunk(3, 2)).toStrictEqual([]);
        expect(_.chunk(false)).toStrictEqual([]);
        expect(_.chunk([])).toStrictEqual([]);
      });
      it('compact: eliminates falsy values in an array', () => {
        expect(_.compact([0, 15, false, 19, '', 21, 42, 8])).toEqual([15, 19, 21, 42, 8]);
        expect(_.compact({ a: 0 })).toStrictEqual([]);
        expect(_.compact([])).toStrictEqual([]);
        expect(_.compact('ANI')).toStrictEqual(['A', 'N', 'I']);
      });
      it('drop: drops a number of elements in an array', () => {
        expect(_.drop([1, 2, 3], 2)).toEqual([3]);
        expect(_.drop('Notebook', 4)).toStrictEqual(['b', 'o', 'o', 'k']);
        expect(_.drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
        expect(_.drop('21', 0)).toStrictEqual(['2', '1']);
      });
      it('dropWhile: creates a slice of array excluding elements dropped from the beginning', () => {
        expect(_.dropWhile([1, 2, 3, 4, 5, 6], (a) => a <= 3)).toEqual([4, 5, 6]);
        expect(_.dropWhile([
          { 'user': 'NI',  'active': false },
          { 'user': 'Ann',    'active': false },
          { 'user': 'AnI', 'active': true }
        ], (v) => !v.active)).toStrictEqual([ { user: 'AnI', active: true } ]);
        expect(_.dropWhile('Notebook', (v) => v === v.toUpperCase())).toStrictEqual(['o', 't', 'e', 'b', 'o', 'o', 'k' ]);
      });
      it('take: Creates a slice of array with n elements taken from the beginning.', () => {
        expect(_.take([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([1, 2, 3]);
        expect(_.take([21, 222, 333], 0)).toStrictEqual([]);
      });
      it('filter: should filter by function', () => {
        expect(
          _.filter(
          [
            { user: 'Ani', age: 21, active: true },
            { user: 'fred', age: 22, active: false },
          ],
          (o) => !o.active,
        ),
      ).toEqual([{ user: 'fred', age: 22, active: false }]);
      expect(_.filter(15, (A) => A > 2)).toStrictEqual([]);
      });
      it('find: Iterates over elements of Array, returning the first element predicate returns truthy for.', () => {
        expect(_.find([22, 11, 8, 7, 6], (a) => a % 3 === 0)).toEqual(6);
        expect(_.find([11, 91, 37], (v) => !(v % 2))).toStrictEqual(undefined);
      });
      it('includes: Checks if value is in Array', () => {
        expect(_.includes([1, 2, 3], 2, -2)).toStrictEqual(true);
      });
      it('map: Creates an array of values by running each element in Array thru iteratee.',() => {
        expect(_.map([3, 5, 8], (n) => n * n)).toStrictEqual([9, 25, 64]);
        expect(_.map([3, 5, 8], (n) => n * 2)).toStrictEqual([6, 10, 16]);
        expect(_.map(true, (v) => !v)).toStrictEqual([]);
      });
      it('zip: Creates an array of grouped elements',() => {
        expect(_.zip([2, 4, 6], ['A', 'B', 'C'], [true, false, true])).toContainEqual([2, 'A', true], [4, 'B', false], [6, 'C', true]);
        expect(_.zip(['A', 'B', 'C'], [19, 91], [88, 61])).toStrictEqual([ [ 'A', 19, 88 ], [ 'B', 91, 61 ], [ 'C', undefined, undefined ]]);
      });
    });
//  objects

describe('test objects methods', () => {
  it('sets a key Value Pair for an object, returns the !value!', () => {
    expect(_.setProperty({}, 'a', 5)).toBe(5);
  });
  it('merge: merges own and inherited enumerable string keyed properties', () => {
    expect(_.merge({ a: 12, b: 222 }, { c: 345, d: 414 })).toMatchObject({a: 12, b: 222, c: 345, d: 414 });
  });
  it('omit: removes the properies of the object',() => {
    expect(_.omit({ a: 21, b: 222, c: 33 }, ['a', 'c'])).toMatchObject({ b: 222 });
    expect(_.omit(false, 3)).toStrictEqual({});
  });
  it('omitBy: removes the properies of the object for values which doesent return truthy of a function given', () => {
    expect(_.omitBy(null, (v) => !v === true)).toStrictEqual({});
    expect(_.omitBy({ a: 1, b: '2', c: 3 }, (a) => typeof a === 'number')).toMatchObject({ b: '2' });
  });
  it('pick: Creates an object composed of the picked object properties', () => {
    expect(_.pick(false, 3)).toStrictEqual({});
    expect(_.pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])).toMatchObject({ a: 1, c: 3 });
  });
  it('pickBy: Creates an object composed of the object properties predicate returns truthy for.', () => {
    expect(_.pickBy(null, (v) => !v === true)).toStrictEqual({});
    expect(_.pickBy({ a: 1, b: 'ani', c: 3, d: '2' }, (a) => typeof a === 'number')).toMatchObject({ a: 1, c: 3 });
  });
  it('toPairs: Creates an array of own enumerable string keyed-value pairs for objects', () => {
    expect(_.toPairs({ a: '1', b: '2' })).toStrictEqual([['a', 1], ['b', 2]]);
    expect(_.toPairs(null)).toStrictEqual([]);
    expect(_.toPairs([1, 2, 3])).toStrictEqual([ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]);
  });
});