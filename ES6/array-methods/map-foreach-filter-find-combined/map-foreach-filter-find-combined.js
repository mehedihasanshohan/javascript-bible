const chickenPieces = [
  { name: 'Leg', spiceLevel: 24 },
  { name: 'Wing', spiceLevel: 21 },
  { name: 'Breast', spiceLevel: 25 },
  { name: 'Thigh', spiceLevel: 28 }
];

// Step 1: Filter spicy pieces (>22)
const spicyPieces = chickenPieces.filter(piece => piece.spiceLevel > 22);

// Step 2: Add sauce level to each spicy piece
const saucyPieces = spicyPieces.map(piece => ({ ...piece, sauceLevel: 'Extra Saucy!' }));

// Step 3: Log each saucy piece
saucyPieces.forEach(piece => {
  console.log(`Grill ready: ${piece.name}, Spice: ${piece.spiceLevel}, Sauce: ${piece.sauceLevel}`);
});

// Step 4: Find first super-tasty piece (>25 spice)
const firstSuperTasty = saucyPieces.find(piece => piece.spiceLevel > 25);
console.log('First Super Tasty Piece:', firstSuperTasty);


// output
// Grill ready: Leg, Spice: 24, Sauce: Extra Saucy!
// Grill ready: Breast, Spice: 25, Sauce: Extra Saucy!
// Grill ready: Thigh, Spice: 28, Sauce: Extra Saucy!
// First Super Tasty Piece: { name: 'Thigh', spiceLevel: 28, sauceLevel: 'Extra Saucy!' }
