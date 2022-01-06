fudge = (recipe == 'SPANISH') ? SPANISH_FUDGE : (recipe == 'FRENCH') ? FRENCH_FUDGE : (recipe == 'ENGLISH') ? ENGLISH_FUDGE : 1;
amt = fudge === 1 ? base : base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;
choclate = (recipe == 'FRENCH') && 7;
