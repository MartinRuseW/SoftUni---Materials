const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe('findNewApartment', () => {
  describe('isGoodLocation', () => {
    it('should return "This location is not suitable for you." if city is not Sofia, Plovdiv, or Varna', () => {
      expect(findNewApartment.isGoodLocation('London', true)).to.equal('This location is not suitable for you.');
    });

    it('should return "There is no public transport in area." if nearPublicTransportation is false', () => {
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
    });

    it('should return "You can go on home tour!" if city is Sofia, Plovdiv, or Varna and nearPublicTransportation is true', () => {
      expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
    });

    it('should throw an error if city is not a string', () => {
      expect(() => findNewApartment.isGoodLocation(123, true)).to.throw('Invalid input!');
    });

    it('should throw an error if nearPublicTransportation is not a boolean', () => {
      expect(() => findNewApartment.isGoodLocation('Sofia', 'yes')).to.throw('Invalid input!');
    });
  });

  describe('isLargeEnough', () => {
    it('should return an array of apartments that are equal to or greater than the minimal square meters', () => {
      const apartments = [40, 50, 60, 70, 80];
      const minimalSquareMeters = 60;
      expect(findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.deep.equal([60, 70, 80]);
    });

    it('should throw an error if apartments is not an array', () => {
      expect(() => findNewApartment.isLargeEnough('not an array', 50)).to.throw('Invalid input!');
    });

    it('should throw an error if apartments is an empty array', () => {
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
    });

    it('should throw an error if minimalSquareMeters is not a number', () => {
      expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'not a number')).to.throw('Invalid input!');
    });
  });

  describe('isItAffordable', () => {
    it('should return "You can afford this home!" if price is less than or equal to budget', () => {
      expect(findNewApartment.isItAffordable(100000, 150000)).to.equal('You can afford this home!');
    });

    it('should return "You don\'t have enough money for this house!" if price is greater than budget', () => {
      expect(findNewApartment.isItAffordable(200000, 150000)).to.equal('You don\'t have enough money for this house!');
    });

    it('should throw an error if price is not a number', () => {
      expect(() => findNewApartment.isItAffordable('not a number', 150000)).to.throw('Invalid input!');
    });

    it('should throw an error if budget is not a number', () => {
      expect(() => findNewApartment.isItAffordable(15000, 'not a number').to.throw('Invalid input'));
    });
  })});
