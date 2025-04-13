class WineSelection {
    constructor(space) {
      this.space = space;
      this.wines = [];
      this.bill = 0;
    }
  
    reserveABottle(wineName, wineType, price) {
      if (this.space <= 0) {
        throw new Error("Not enough space in the cellar.");
      }
      this.wines.push({ wineName, wineType, price, paid: false });
      this.space--;
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
  
    payWineBottle(wineName, price) {
      const wineIndex = this.wines.findIndex(
        (wine) => wine.wineName === wineName
      );
      if (wineIndex === -1) {
        throw new Error(`${wineName} is not in the cellar.`);
      }
      if (this.wines[wineIndex].paid) {
        throw new Error(`${wineName} has already been paid.`);
      }
      this.wines[wineIndex].paid = true;
      this.bill += price;
      return `You bought a ${wineName} for ${price}$.`;
    }
  
    openBottle(wineName) {
      const wineIndex = this.wines.findIndex(
        (wine) => wine.wineName === wineName
      );
      if (wineIndex === -1) {
        throw new Error("The wine, you're looking for, is not found.");
      }
      if (!this.wines[wineIndex].paid) {
        throw new Error(`${wineName} needs to be paid before open the bottle.`);
      }
      this.wines.splice(wineIndex, 1);
      this.space++;
      return `You drank a bottle of ${wineName}.`;
    }
  
    cellarRevision(wineType) {
      let result = `You have space for ${this.space} bottles more.\n`;
      result += `You paid ${this.bill}$ for the wine.\n`;
      const winesToDisplay = wineType
        ? this.wines.filter((wine) => wine.wineType === wineType)
        : this.wines;
      if (winesToDisplay.length === 0) {
        throw new Error(
          wineType
            ? `There is no ${wineType} in the cellar.`
            : "The cellar is empty."
        );
      }
      winesToDisplay.sort((a, b) => (a.wineName > b.wineName ? 1 : -1));
      winesToDisplay.forEach((wine) => {
        const paidStatus = wine.paid ? "Has Paid" : "Not Paid";
        result += `${wine.wineName} > ${wine.wineType} - ${paidStatus}.\n`;
      });
      return result.trim();
    }
  }
  
  const selection = new WineSelection(2);
  console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
  console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
  console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
  
    