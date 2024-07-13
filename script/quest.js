const quest = {
    0: {
        dom : "Qual' è il criterio di divisibilità di n per 2?",
        giusto : "n deve essere pari",
        sbagliato : ["l'ultima cifra di n deve essere 0 o 5", "la somma delle cifre di n deve essere 2, 4, o 8", "n deve essere dispari"],
    },
    1: {
        dom : "Qual' è il criterio di divisibilità di n per 3?",
        giusto : "la somma delle cifre deve essere divisibile per 3",
        sbagliato : ["l'ultima cifra di n deve essere 0 o 5", "n deve essere pari", "n deve essere dispari"],
    },
    2: {
        dom : "Qual' è il criterio di divisibilità di n per 5?",
        giusto : "l'ultima cifra di n deve essere 0 o 5",
        sbagliato : ["il valore assoluto della differenza della cifra senza l'unità e il doppio dell' unità deve essere divisibile per 5", "il valore assoluto della differenza della cifra senza l'unità e il doppiop dell' unità deve essere divisibile per 2 e per 5", "n deve essere pari"],
    },
    3: {
        dom : "Qual' è il criterio di divisibilità di n per 7?",
        giusto : "il valore assoluto della differenza della cifra senza l'unità e il doppio dell' unità deve essere divisibile per 7",
        sbagliato : ["l'ultima cifra di n deve essere 7 o 1", "la somma delle cifre di n deve essere 7, 14, o 63", "n deve essere dispari"],
    },
    4: {
        dom : "Qual' è il criterio di divisibilità di n per 11?",
        giusto : "il valore assoluto della differenza tra la somma delle cifre in posizione dispari e quella in posizioni pari deve essere multiplo di 11",
        sbagliato : ["la differenza tra la somma delle cifre in posizione dispari e quella in posizioni pari deve essere multiplo di 11", "il valore assoluto della differenza tra la somma delle cifre in posizione pari e quella in posizioni dispari deve essere multiplo di 11", "n deve essere dispari"],
    },
    5: {
        dom : "Qual' è il criterio di divisibilità di n per 13?",
        giusto : "la somma tra la cifra senza unità e il quadruplo dell'unità deve essere divisibile per 13",
        sbagliato : ["la differenza tra la cifra senza unità e il quadruplo dell'unità deve essere divisibile per 13", "la somma tra la cifra senza unità e il quadruplo dell'unità deve essere pari", "la somma tra la cifra senza unità e il quadruplo dell'unità deve essere divisibile per 3"],
    },
    6: {
        dom : "Qual' è il criterio di divisibilità di n per 17?",
        giusto : "la differenza tra la cifra senza unità e il quintuplo dell'unità deve essere divisibile per 17",
        sbagliato : ["la differenza tra la cifra senza unità e il quadruplo dell'unità deve essere divisibile per 17", "la somma tra la cifra senza unità e il quintuplo dell'unità deve essere divisibile per 17", "la somma tra la cifra senza unità e il quadruplo dell'unità deve essere divisibile per 7"],
    },
    7: {
        dom : "Qual' è il criterio di divisibilità di n per 23?",
        giusto : "la somma tra la cifra senza unità e il settuplo dell'unità deve essere divisibile per 23",
        sbagliato : ["la differenza tra la cifra senza unità e il settuplo dell'unità deve essere divisibile per 23", "la somma tra la cifra senza unità e il quintuplo dell'unità deve essere divisibile per 23", "la somma tra la cifra senza unità e il sestuplo dell'unità deve essere divisibile per 23 "],
    },
    8: {
        dom : "Come rappresento 56 in base 2?",
        giusto : "111000",
        sbagliato : ["101111", "110000", "000111"],
    },
    9: {
        dom : "Qual'è la differenza tra un numero razionale e uno irrazionale?",
        giusto : "i numeri irrazionali sono infiniti, quelli razionali sono finiti",
        sbagliato : ["i numeri razionali sono rappresentabili con una frazione", "i numeri irrazionali sono tutti i numeri sotto radice", "i numeri razionali a differenza degli irrazionali si possono rappresentare come frazioni"],
    },
    10: {
        dom : "Come trasformo un numero periodico in frazione?",
        giusto : "al numeratore metto la differenza tra il numero e il numero senza la parte periodica, al denominatore un 9 per ogni cifra del periodo e uno 0 per ogni cifra dell'antiperiodo",
        sbagliato : ["al numeratore metto la differenza tra il numero e il numero senza la parte periodica, al denominatore uno 0 per ogni cifra del periodo e un 9 per ogni cifra dell'antiperiodo", "al numeratore metto un 9 per ogni cifra del periodo e uno 0 per ogni cifra dell'antiperiodo, al denominatore la differenza tra il numero e il numero senza la parte periodica", "al numeratore metto uno 0 per ogni cifra del periodo e un 9 per ogni cifra dell'antiperiodo, al denominatore la differenza tra il numero e il numero senza la parte periodica"],
    },
    11: {
        dom : "Quale tra queste frazioni è minore di 5/46 ?",
        giusto : "10/190",
        sbagliato : ["1/8", "7/48", "1/4"],
    },
    12: {
        dom : "a<sup>m</sup> * a<sup>n</sup>",
        giusto : "a<sup>m+n</sup>", 
        sbagliato : ["a<sup>m*n</sup>", "a<sup>2</sup>", "a<sup>m-n</sup>"],
    },    
    13: {
        dom : "a<sup>m</sup> / a<sup>n</sup>",
        giusto : "a<sup>m-n</sup>",
        sbagliato : ["a<sup>m/n</sup>", "a<sup>0</sup>", "a<sup>m+n</sup>"],
    },
    14: {
        dom : "a<sup>m<sup>n</sup></sup>",
        giusto : "a<sup>m*n</sup>",
        sbagliato : ["a<sup>m+n</sup>", "a<sup>2*m</sup>", "a<sup>m-n</sup>"],
    },
    15: {
        dom : "a<sup>m</sup> * b<sup>m</sup>",
        giusto : "(a*b)<sup>m</sup>",
        sbagliato : ["(a+b)<sup>m</sup>", "2*a<sup>m</sup>", "(a-b)<sup>m</sup>"],
    },
    16: {
        dom : "a<sup>m</sup> / b<sup>m</sup>",
        giusto : "(a/b)<sup>m</sup>",
        sbagliato : ["(a*b)<sup>m</sup>", "2*b<sup>m</sup>", "(a-b)<sup>m</sup>"],
    },
    17: {
        dom : "<sup>m</sup>√(a) * <sup>m</sup>√(b)",
        giusto : "<sup>m</sup>√(a*b)",
        sbagliato : ["<sup>m</sup>√(a+b)", "2 * <sup>m</sup>√(a)", "<sup>m</sup>√(a/b)"],
    },
    18: {
        dom : "<sup>m</sup>√(a) / <sup>m</sup>√(b)",
        giusto : "<sup>m</sup>√(a/b)",
        sbagliato : ["<sup>m</sup>√(a-b)", "2 * <sup>m</sup>√(b)", "<sup>m</sup>√(a*b)"],
    },
    19: {
        dom : "(<sup>m</sup>√(a))<sup>n</sup>",
        giusto : "<sup>m</sup>√(a<sup>n</sup>)",
        sbagliato : ["<sup>m*n</sup>√(a)", "<sup>m</sup>√(a*n)", "<sup>m</sup>√(a+n)"],
    },
    20: {
        dom : "<sup>m</sup>√(<sup>n</sup>√a)",
        giusto : "<sup>m*n</sup>√(a)",
        sbagliato : ["<sup>m^n</sup>√(a)", "<sup>m</sup>√(a<sup>n</sup>)", "<sup>m+n</sup>√(a)"],
    },
    21: {
        dom : "qual' è il 27% di 456?",
        giusto : "123,12",
        sbagliato : ["140,43", "130,56", "115,75"],
    },
    22: {
        dom : "Quanto fa 3*(4+2)-5?",
        giusto : "13",
        sbagliato : ["3", "10", "7"],
    },
    23: {
        dom : "Quanto vale x in 2x + 7x = 3+(3*2)",
        giusto : "1",
        sbagliato : ["3", "5", "2"],
    },
    24: {
        dom : "Quale tra queste equazioni è equivalente a 4x-1?",
        giusto : "2x-1/2",
        sbagliato : ["7x+4", "5x-3/4", "6x-3"],
    },
    25: {
        dom : "Quanto vale a<sup>2</sup> - b<sup>2</sup>",
        giusto : "(a+b)(a-b)",
        sbagliato : ["(a-b)<sup>2</sup>", "2a-2b", "2a+2b"],
    },
    26: {
        dom : "Come si esegue l'MCD ?",
        giusto : "Scompongo in fattori primi e prendo quelli comuni a tutti con l'esponente maggiore",
        sbagliato : ["Scompongo in fattori primi e prendo quelli comuni a tutti con l'esponente minore", "Scompongo in fattori primi e li prendo tutti con l'esponente maggiore", "Scompongo in fattori primi e li prendo tutti con l'esponente minore"],
    },
    27: {
        dom : "Come si esegue l'mcm?",
        giusto : "Scompongo in fattori primi e li prendo tutti con l'esponente maggiore",
        sbagliato : ["Scompongo in fattori primi e prendo quelli comuni a tutti con l'esponente minore", "Scompongo in fattori primi e prendo quelli comuni a tutti con l'esponente maggiore", "Scompongo in fattori primi e li prendo tutti con l'esponente minore"],
    },
    28: {
        dom : "Come si calcola il determinante per il metodo di Cramer?",
        giusto : "Creo una matrice e nella prima colonna metto i coefficienti delle x, nella seconda quelli delle y",
        sbagliato : ["Creo una matrice e nella prima colonna metto i coefficienti delle y, nella seconda quelli delle x", "Creo una matrice e nella prima colonna metto i termini noti, nella seconda i coefficienti delle y", "Creo una matrice e nella prima colonna metto i termini noti, nella seconda i coefficienti delle x"],
    },
    29: {
        dom : "|A(x)| = |B(x)|",
        giusto : "A(x) = B(x) V A(x) = - B(x)",
        sbagliato : ["A(x) = B(x)", "A(x) = -B(x) ^ A(x) = B(x)", "- A(x) = B(x) V A(x) = B(x)"],
    },
    30: {
        dom : "|A(x)| = B(x)",
        giusto : "A(x) = B(x) V -A(x) = B(x)",
        sbagliato : ["A(x) = B(x)", "A(x) = -B(x) ^ A(x) = B(x)", "- A(x) = B(x) ^ A(x) = B(x)"],
    },
    31: {
        dom : "Cos'è il dominio di una funzione?",
        giusto : "L'insieme degli input possibili",
        sbagliato : ["Espansione del Dominio", "l'insieme delle y", "l'insieme dei valori di output"],
    },
    32: {
        dom : "Cos'è il codominio di una funzione?",
        giusto : "L'insieme degli output possibili",
        sbagliato : ["l'insieme dei valori effettivi di output", "l'insieme delle x", "l'insieme dei valori di input"],
    },
    33: {
        dom : "Cos'è l'immagine di una funzione?",
        giusto : "L'insieme degli output effettivi",
        sbagliato : ["la foto del grafico", "l'insieme delle y", "l'insieme dei valori di input"],
    },
    34: {
        dom : "cosa vuol dire che f(x) è positiva in un certo intervallo?",
        giusto : "che in quell'intervallo la y è > 0",
        sbagliato : ["che in quell'intervallo la x è > 0", "che in quell'intervallo la y è >= 0", "che in quell'intervallo la x è >= 0"],
    },
    35: {
        dom : "cosa vuol dire che f(x) è suriettiva?",
        giusto : "che l'immagine è uguale al codominio",
        sbagliato : ["che l'immagine è uguale al condominio", "che l'immagine è uguale al dominio", "che la controimmagine è uguale al codominio"],
    },
    36: {
        dom : "cosa vuol dire che f(x) è iniettiva?",
        giusto : "che il dominio è minore del codominio",
        sbagliato : ["che il dominio è maggiore del codominio", "che il codominio è minore del dominio", "che il codominio è uguale al dominio"],
    },
    37: {
        dom : "cosa vuol dire che f(x) è biettiva?",
        giusto : "che l'immagine è uguale al dominio",
        sbagliato : ["che l'immagine è uguale al codominio", "che l'immagine è maggiore del dominio", "che la controimmagine è uguale al codominio"],
    },
    38: {
        dom : "cosa vuol dire che f(x) è pari?",
        giusto : "che f(x) = f(-x)",
        sbagliato : ["che -f(x) = f(x)", "che f(-x) = -f(x)", "gli input sono solo numeri pari"],
    },
    39: {
        dom : "cosa vuol dire che f(x) è dispari?",
        giusto : "che -f(x) = f(-x)",
        sbagliato : ["che -f(x) = f(x)", "che f(-x) = f(x)", "gli input sono solo numeri dispari"],
    },  
    40: {
        dom : "cos'è il logaritmo in base a di b?",
        giusto : "l'esponente che elevato ad a da come risultato b",
        sbagliato : ["l'esponente che elevato a b da come risultato a", "il risultato di a <sup>b</sup>", "il risultato di b <sup>a</sup>"],
    },
    41: {
        dom : "log<sub>a</sub>(b*c) = ?",
        giusto : "log<sub>a</sub>(b) + log<sub>a</sub>(c)",
        sbagliato : ["b + c", "log<sub>a</sub>(b+c)", "log<sub>b*c</sub>(a)"],
    },
    42: {
        dom : "log<sub>a</sub>(b<sup>c</sup>) = ?",
        giusto : "c * log<sub>a</sub>(b)",
        sbagliato : ["c + log<sub>a</sub>(b)", "log<sub>a</sub>(b*c)", "log<sub>a</sub>(b+c)"],
    },
    43: {
        dom : "log<sub>a</sub>(b/c) = ?",
        giusto : "log<sub>a</sub>(b) - log<sub>a</sub>(c)",
        sbagliato : ["b - c", "log<sub>a</sub>(b-c)", "log<sub>b/c</sub>(a)"],
    },
    44: {
        dom : "log<sub>a</sub>(b) = ?",
        giusto : "log<sub>c</sub>(b) / log<sub>c</sub>(a)",
        sbagliato : ["log<sub>c</sub>(a) / log<sub>c</sub>(b)", "log<sub>c</sub>(b) - log<sub>c</sub>(a)", "log<sub>c</sub>(a) - log<sub>c</sub>(b)"],
    },
    45: {
        dom : "log<sub>a</sub>(b) = ?",
        giusto : "1/log<sub>b</sub>(a)",
        sbagliato : ["1/log<sub>a</sub>(b)", "1 - log<sub>b</sub>(a)", "log<sub>b/c</sub>(a)<sup>-1</sup>"],
    },
    46: {
        dom : "quando due rette sono parallele in un sistema di riferimento a due dimensioni? ",
        giusto : "quando i coefficienti angolari sono uguali",
        sbagliato : ["quando le equazioni sono uguali", "quando i coefficienti angolari sono 0", "quando i coefficienti angolari sono uno l'inverso negativo dell'altro"],
    },
    47: {
        dom : "quando due rette sono perpendicolari in un sistema di riferimento a due dimensioni? ",
        giusto : "quando i coefficienti sono uno l'inverso negativo dell'altro",
        sbagliato : ["quando le equazioni sono uguali", "quando i coefficienti sono 0", "quando i coefficienti angolari sono uguali"],
    },
    48: {
        dom : "cos'è l'RCO?",
        giusto : "Riferimento Cartesiano Ortogonale",
        sbagliato : ["Riferimento Cartesiano Obliquo", "Riferimento Cartesiano Onniscente", "Retta Con Origine"],
    },
    49: {
        dom : "in un RCO, cosa sono i, j e k? ",
        giusto : "vettori direzionali unari",
        sbagliato : ["lettere usate per indicare gli assi", "il nome dell' origine riferito a ciascun asse", "gli angoli degli assi con l'origine"],
    },
    50: {
        dom : "come si calcola la distanza tra punti in un RCO?",
        giusto : "√((x1-x2)^2 + (y1-y2)^2 + (z1-z2)^2)",
        sbagliato : ["√((x1+x2)^2 + (y1+y2)^2 + (z1+z2)^2)", "√((x1-x2)^2 - (y1-y2)^2 - (z1-z2)^2)", "(x1-x2)^2 + (y1-y2)^2 + (z1-z2)^2"],
    },
    51: {
        dom : "come viene rappresentato il vettore OA con A(xa; ya; za)?",
        giusto : "a = xai + yaj + zak",
        sbagliato : ["a = xai - yaj - zak", "a = xa + ya + za", "a = i + j + k"],
    },
    52: {
        dom : "come viene rappresentata la somma di due vettori A(xa; ya; za) e B(xb; yb; zb)?",
        giusto : "c = (xa + xb; ya + yb; za + zb)",
        sbagliato : ["c = xai + yaj + zak", "c = xa + yb + za", "c = (xa - xb; ya - yb; za - zb)"],
    },
    53: {
        dom : "come viene rappresentata la differenza di due vettori A(xa; ya; za) e B(xb; yb; zb)?",
        giusto : "c = (xa - xb; ya - yb; za - zb)",
        sbagliato : ["c = xaxb + yayb + zazb", "c = xa - yb - za", "c = (xa + xb; ya + yb; za + zb)"],
    },
    54: {
        dom : "come viene rappresentato il prodotto di uno scalare k con un vettore A(xa; ya; za)?",
        giusto : "c = (kxa; kya; kza)",
        sbagliato : ["c = (k/xa; k/ya; k/za)", "c = (kxa + kya + kza)", "c = (k + xa; k + ya; k + za)"],
    },
    55: {
        dom : "come viene rappresentato il prodotto scalare tra i vettori A(xa; ya; za) e B(xb; yb; zb)?",
        giusto : "c = axbx; ayby; azbz",
        sbagliato : ["c = (k/xa; k/ya; k/za)", "c = ax + bx; ay + by; az + bz", "c = axbx + ayby + azbz"],
    },
    56: {
        dom : "come viene rappresentato il prodotto vettoriale tra i vettori A(xa; ya; za) e B(xb; yb; zb)?",
        giusto : "sviluppando una matrice composta da: 1a riga vettori unari, 2a riga componenti di A, 3a riga componenti di B",
        sbagliato : ["sviluppando una matrice composta da: 1a riga componenti di A, 2a riga vettori unari, 3a riga componenti di B", "c = axbx; ayby; azbz", "sviluppando una matrice composta da: 1a riga componenti di B, 2a riga vettori unari, 3a riga componenti di A"],
    },
    57: {
        dom : "quando due vettori sono paralleli in un sistema di riferimento a tre dimensioni? ",
        giusto : "quando ax/bx = ay/by = az/bz = k",
        sbagliato : ["quando axbx = ayby = azbx = k", "quando ax/bx + ay/by + az/bz = 0", "quando ax/bx - ay/by - az/bz = 0"],
    },
    58: {
        dom : "quando due vettori sono perpendicolari in un sistema di riferimento a tre dimensioni? ",
        giusto : "quando ax/bx + ay/by + az/bz = 0",
        sbagliato : ["quando axbx = ayby = azbz = k", "quando ax/bx + ay/by + az/bz = 0", "quando ax/bx - ay/by - az/bz = 0"],
    },
    59: {
        dom : "qual'è l'equazione in forma cartesiana del piano? ",
        giusto : "ax + by + cz + d = 0",
        sbagliato : ["ax + by + c = 0", "ax + by + cz - d = 0", "ax; by; cz; d"],
    },
    60: {
        dom : "a cosa corrisponde la d nell'equazione cartesiana del piano? ",
        giusto : "-ax0 - by0 - cz0, che indica che il piano passa per P(x0; y0; z0)",
        sbagliato : ["-ax0 - by0 - cz0, che indica che il piano passa per P(x; y; z)", "ax0 + by0 + cz0, che indica che il piano passa per P(x0; y0; z0)", "a + b + c"],
    },
    61: {
          dom : "quando due piani sono paralleli?",
        giusto : "quando a/a' = b/b' = c/c'",
        sbagliato : ["quando aa' = bb' = cc'", "quando a/a' + b/b' = c/c'", "quando a/a' + b/b' + c/c' = 0"],
    },
    62: {
        dom : "quando due piani sono perpendicolari?",
        giusto : "quando aa' + bb' + cc' = 0",
        sbagliato : ["quando aa' = bb' = cc'", "quando a/a' = b/b' = c/c'", "quando a/a' + b/b' + c/c' = 0"],
    },
    63: {
        dom : "qual'è la distanza di un punto A da un piano?",
        giusto : "|aXA + bYA + cZA + d| / √(a^2 + b^2 + c^2)",
        sbagliato : ["|aXA + bYA + cZA| / √(a^2 + b^2 + c^2)", "|aXA + bYA + cZA + d| / √(a^2 + b^2 - c^2)", "|aXA + bYA + cZA + d| / √(a^2 + b^2)"],
    },
    64: {
        dom : "qual' è l'equazione parametrica di una retta passante per P0 e parallela a un vettore v(l;m;n)?",
        giusto : "x = X0 + kl ^ y = Y0 + km ^ z = Z0 + kn",
        sbagliato : ["x = X0 + l ^ y = Y0 + m ^ z = Z0 + n", "x = kl ^ y = km ^ z = kn", "x = X0 + k ^ y = Y0 + k ^ z = Z0 + k"],
    },
    65: {
        dom : "qual' è l'equazione cartesiana di una retta passante per P0 e parallela a un vettore v(l;m;n)?",
        giusto : "x - X0 / l =  y - Y0 / m ^ z - Z0 / n",
        sbagliato : ["x / X0 + l = y / Y0 + m = z / Z0 + n", "x + X0 / l = y + Y0 / m = z + Z0 / n", "x / X0 = y / Y0 = z / Z0"],
    },
    66: {
        dom : "qual' è l'equazione di una retta passante per A e B?",
        giusto : "(x - xa) / (xb - xa) = (y - ya) / (yb - ya) = (z - za) / (zb - za)",
        sbagliato : ["(x + xa) / (xb + xa) = (y + ya) / (yb + ya) = (z + za) / (zb + za)", "(x - xa) / (xb + xa) = (y - ya) / (yb + ya) = (z - za) / (zb + za)", "(x + xa) / (xb - xa) = (y + ya) / (yb - ya) = (z + za) / (zb - za)"],
    },
    67: {
        dom : "quando due rette sono parallele in un sistema a 3 dimensioni?",
        giusto : "quando l/l' = m/m' = n/n'",
        sbagliato : ["quando l = m = n", "quando l' = l ^ m' = m ^ n' = n", "quando l/l' = m/m' = n/n' = 0"],
    },
    68: {
        dom : "quando due rette sono perpendicolari in un sistema a 3 dimensioni?",
        giusto : "quando ll' + mm' + nn' = 0",
        sbagliato : ["quando ll' - mm' - nn' = 0", "quando ll' = mm' = nn'", "quando l = l' ^ m = m' ^ n = n'"],
    },
    69: {
        dom : "quando una retta v(l;m;n) e un piano n(a;b;c) sono paralleli?",
        giusto : "quando al + bm + cn = 0",
        sbagliato : ["quando al - bm - cn = 0", "quando al = bm = cn", "quando a/l = b/m = c/n"],
    },
    70: {
        dom : "quando una retta v(l;m;n) e un piano n(a;b;c) sono perpendicolari?",
        giusto : "quando a/l = b/m = c/n",
        sbagliato : ["quando al - bm - cn = 0", "quando al = bm = cn", "quando al + bm + cn = 0"],
    },
    71: {
        dom : "come si calcola il perimetro di un quadrato?",
        giusto : "2p = 4l",
        sbagliato : ["p = 4l", "2p = 2l", "2p = l<sup>2</sup>"],
    },
    72: {
        dom : "come si calcola l'area di un quadrato?",
        giusto : "A = l<sup>2</sup>",
        sbagliato : ["A = 2(l1) + 2(l2)", "A = 4l", "A = l1 + l2"],
    },
    73: {
        dom : "come si calcola il perimetro di un rettangolo?",
        giusto : "2p = 2(l1) + 2(l2)",
        sbagliato : ["p = 2(l1) + 2(l2)", "2p = 4l", "2p = l1 * l2"],
    },
    74: {
        dom : "come si calcola l'area di un rettangolo?",
        giusto : "A = l1 * l2",
        sbagliato : ["A = 2(l1) + 2(l2)", "Ap = 4l", "A = l1 * l2/ 2"],
    },
    75: {
        dom : "come si calcola il perimetro di un rombo?",
        giusto : "2p = 4l",
        sbagliato : ["p = 3l", "2p = 4l - 3", "2p = l1 * l2"],
    },
    76: {
        dom : "come si calcola l'area di un rombo?",
        giusto : "A = (d1 * d2) / 2",
        sbagliato : ["A = (d1 - d2) / 2", "A = d1 / 2", "A = d1 / d2"],
    },
    77: {
        dom : "come si calcola il perimetro di un deltoide?",
        giusto : "2p = 2(l1) + 2(l2)",
        sbagliato : ["p = 4l", "2p = 4l", "2p = l1 * l2"],
    },
    78: {
        dom : "come si calcola l'area di un deltoide?",
        giusto : "A = (d1 * d2) / 2",
        sbagliato : ["A = (d1 - d2) / 2", "A = d1 / 2", "A = d1 / d2"],
    },
    79: {
        dom : "come si calcola il perimetro di un parallelogramma?",
        giusto : "2p = 2(l1) + 2(l2)",
        sbagliato : ["p = 4l", "2p = 4l", "2p = l1 * l2"],
    },
    80: {
        dom : "come si calcola l'area di un parallelogramma?",
        giusto : "A = l1 * h",
        sbagliato : ["A = l1 - h", "A = l1 * h / 2", "A = l1 / h"],
    },
    81: {
        dom : "come si calcola il perimetro di un trapezio?",
        giusto : "2p = l1 + l2 + l3 + l4",
        sbagliato : ["p = 4l1", "2p = (l1 + l2) * 2", "2p = l1 * l2"],
    },
    82: {
        dom : "come si calcola l'area di un trapezio?",
        giusto : "A = (l1 + l3) * h / 2",
        sbagliato : ["A = l1 * l2 * l3 * l4", "A = l1 * h / 2", "A = l1 * l2 / 2"],
    },
    83: {
        dom : "come si calcola il perimetro di un triangolo?",
        giusto : "2p = l1 + l2 + l3",
        sbagliato : ["p = 3l", "2p = (l1 + l2) * 2", "2p = l1 * l2 / 2"],
    },
    84: {
        dom : "come si calcola l'area di un triangolo?",
        giusto : "A = l1 * h / 2",
        sbagliato : ["A = l1 * l2 * l3", "A = 3l", "A = l1 * l2 / 2"],
    },
    85: {
        dom : "come si calcola la circonferenza di un cerchio?",
        giusto : "c = 2πr",
        sbagliato : ["c = πr<sup>2</sup>", "c = 2r<sup>2</sup>", "c = r<sup>2</sup>"],
    },
    86: {
        dom : "come si calcola l'area di un cerchio?",
        giusto : "A = πr<sup>2</sup>",
        sbagliato : ["A = 2πr", "A = 2r<sup>2</sup>", "A = r<sup>2</sup>"],
    },
    87: {
        dom : "come si calcola l'area laterale di un prisma?",
        giusto : "Al = 2p * h",
        sbagliato : ["Al = p * h", "Al = 2p * h / 2 ", "Al = l * h"],
    },
    88: {
        dom : "come si calcola l'area totale di un prisma?",
        giusto : "At = Al + 2Ab",
        sbagliato : ["At = 2Al + Ab", "At = 2Al + 2Ab", "At = Al * Ab"],
    },
    89: {
        dom : "come si calcola il volume di un prisma?",
        giusto : "V = Ab * h",
        sbagliato : ["V = Al * h", "V = At * h", "V = Ab * Al"],
    },
    90: {
        dom : "come si calcola l'area laterale di un parallelepipedo?",
        giusto : "Al = 2p * h",
        sbagliato : ["Al = p * h", "Al = 2p * h / 2 ", "Al = l * h"],
    },
    91: {
        dom : "come si calcola l'area totale di un parallelepipedo?",
        giusto : "At = Al + 2Ab",
        sbagliato : ["At = 2Al + Ab", "At = 2Al + 2Ab", "At = Al * Ab"],
    },
    92: {
        dom : "come si calcola il volume di un parallelepipedo?",
        giusto : "V = Ab * h",
        sbagliato : ["V = Al * h", "V = At * h", "V = Ab * Al"],
    },
    93: {
        dom : "come si calcola l'area laterale di una piramide retta?",
        giusto : "Al = 2p * h / 2",
        sbagliato : ["Al = 2p * h", "Al = p * h ", "Al = l * h"],
    },
    94: {
        dom : "come si calcola l'area totale di una piramide retta?",
        giusto : "At = Al + Ab",
        sbagliato : ["At = 2Al + Ab", "At = 2Al + 2Ab", "At = Al * Ab"],
    },
    95: {
        dom : "come si calcola il volume di una piramide retta?",
        giusto : "V = Ab * h / 3",
        sbagliato : ["V = Al * h / 3", "V = At * h / 3", "V = Ab * Al / 3"],
    },
    96: {
        dom : "come si calcola l'area laterale di un cilindro?",
        giusto : "Al = 2πr * h",
        sbagliato : ["Al = 2r * h", "Al = 2π * h ", "Al = 2πr * l"],
    },
    97: {
        dom : "come si calcola l'area totale di un cilindro?",
        giusto : "At = Al + 2Ab",
        sbagliato : ["At = Al + Ab", "At = 2Al + 2Ab", "At = Al * Ab"],
    },
    98: {
        dom : "come si calcola il volume di un cilindro?",
        giusto : "V = πr<sup>2</sup> * h",
        sbagliato : ["V = πr<sup>2</sup> * h / 3", "V = At * h / 3", "V = Ab * Al / 3"],
    },
    99: {
        dom : "come si calcola l'area di una sfera?",
        giusto : "A = 4πr<sup>2</sup>",
        sbagliato : ["A = 2πr<sup>2</sup>", "A = 4πr", "A = 4π<sup>2</sup>"],
    },
    100: {
        dom : "come si calcola il volume di una sfera?",
        giusto : "V = 4/3 πr<sup>3</sup>",
        sbagliato : ["A = 4/3 πr<sup>2</sup>", "A = 4/3 πr", "A = 2/3 π<sup>3</sup>"],
    },
    101: {
        dom : "qual'è l'equazione generica della circonferenza?",
        giusto : "x<sup>2</sup> + y<sup>2</sup> + ax + by + c = 0",
        sbagliato : ["ax<sup>2</sup> + by<sup>2</sup> + ax + by = 0", "x<sup>2</sup> + y<sup>2</sup> = 0", "x<sup>2</sup> = y<sup>2</sup>"],
    },
    102: {
        dom : "come si calcolano le coordinate del centro di una circonferenza?",
        giusto : "C = (-a/2; -b/2)",
        sbagliato : ["C = (-a; -b)", "C = (a/2; b/2)", "C = (a<sup>2</sup>/4 ; b<sup>2</sup>/4)"],
    },
    103: {
        dom : "come si calcola il raggio di una circonferenza?",
        giusto : "r = √(a<sup>2</sup>/4 + b<sup>2</sup>/4 - c)",
        sbagliato : ["r = √(a<sup>2</sup>/2 + b<sup>2</sup>/2 - c)", "r = √(a<sup>2</sup>/4 + b<sup>2</sup>/4 + c)", "r = √(a/4 + b/4 - c)"],
    },
    104: {
        dom : "qual'è l'equazione generica dell'ellisse?",
        giusto : "x<sup>2</sup> / a<sup>2</sup> + y<sup>2</sup> / b<sup>2</sup> = 1",
        sbagliato : ["x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 1", "x<sup>2</sup> / a<sup>2</sup> + y<sup>2</sup> / b<sup>2</sup> = 0", "x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 0"],
    },
    105: {
        dom : "come si calcolano i fuochi di un'ellisse?",
        giusto : "F1(-√(a<sup>2</sup> - b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> - b<sup>2</sup>) ; 0)",
        sbagliato : ["F1(-√(a<sup>2</sup> + b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> + b<sup>2</sup>) ; 0)", "F1( 0 ; -√(a<sup>2</sup> - b<sup>2</sup>)); F2(0 ; √(a<sup>2</sup> - b<sup>2</sup>))", "F1(-√(a<sup>2</sup> - b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> + b<sup>2</sup>) ; 0)"],
    },
    106: {
        dom : "come si calcola l'eccentricità di un'ellisse?",
        giusto : "e = √(a<sup>2</sup> - b<sup>2</sup>) / a",
        sbagliato : ["e = √(a<sup>2</sup> + b<sup>2</sup>) / a", "e = √(a<sup>2</sup> - b<sup>2</sup> / a)", "e = √(a<sup>2</sup> + b<sup>2</sup> / a)"],
    },
    107: {
        dom : "qual'è l'equazione generica della parabola?",
        giusto : "y = ax<sup>2</sup> + bx + c = 0",
        sbagliato : ["y = ax + bx + c = 0", "xy = ax<sup>2</sup> + bx + c = 0", "y = ax<sup>2</sup> + bx - c = 0"],
    },
    108: {
        dom : "come si calcola il vertice di una parabola?",
        giusto : "V(-b/2a ; -Δ/4a)",
        sbagliato : ["V(-b/a ; -Δ/4a)", "V(-b/a ; -Δ/a)", "V(b/2a ; +Δ/4a)"],
    },
    109: {
        dom : "come si calcola il fuoco di una parabola?",
        giusto : "F(-b/2a ; 1-Δ/4a)",
        sbagliato : ["F(-b/a ; 1-Δ/4a)", "F(-b/a ; 1-Δ/a)", "F(b/2a ; 1+Δ/4a)"],
    },
    110: {
        dom : "qual'è l'equazione generica dell'iperbole?",
        giusto : "x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 1 V x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = -1",
        sbagliato : ["x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 1", "x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 1 ^ x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = -1", "x<sup>2</sup> / a<sup>2</sup> - y<sup>2</sup> / b<sup>2</sup> = 0"],
    },
    111: {
        dom : "come si calcolano i fuochi di un'iperbole?",
        giusto : "F1(-√(a<sup>2</sup> + b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> + b<sup>2</sup>) ; 0) V F1(0 ; -√(a<sup>2</sup> + b<sup>2</sup>)); F2(0 ; √(a<sup>2</sup> + b<sup>2</sup>))",
        sbagliato : ["F1(-√(a<sup>2</sup> + b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> + b<sup>2</sup>) ; 0) ^ F1(0 ; -√(a<sup>2</sup> + b<sup>2</sup>)); F2(0 ; √(a<sup>2</sup> + b<sup>2</sup>))", "F1(-√(a<sup>2</sup> - b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> + b<sup>2</sup>) ; 0) V F1(0 ; -√(a<sup>2</sup> - b<sup>2</sup>)); F2(0 ; √(a<sup>2</sup> + b<sup>2</sup>))", "F1(-√(a<sup>2</sup> + b<sup>2</sup>) ; 0); F2(√(a<sup>2</sup> - b<sup>2</sup>) ; 0) V F1(0 ; -√(a<sup>2</sup> + b<sup>2</sup>)); F2(0 ; √(a<sup>2</sup> - b<sup>2</sup>))"],
    },
    112: {
        dom : "come si calcola l'eccentricità di un'iperbole?",
        giusto : "e = √(a<sup>2</sup> + b<sup>2</sup>) / a V e = √(a<sup>2</sup> + b<sup>2</sup>) / b",
        sbagliato : ["e = √(a<sup>2</sup> - b<sup>2</sup>) / a V e = √(a<sup>2</sup> - b<sup>2</sup>) / b", "e = √(a<sup>2</sup> + b<sup>2</sup> / a) V e = √(a<sup>2</sup> + b<sup>2</sup> / b)", "e = √(a<sup>2</sup> + b<sup>2</sup> / a)"],
    },
    113: {
        dom : "qual'è l'equazione generica della sfera?",
        giusto : "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + ax + by + cz + d = 0",
        sbagliato : ["x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + ax + by + cz = k", "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + d = 0", "x<sup>2</sup> - y<sup>2</sup> - z<sup>2</sup> + ax + by + cz + d = 0"],
    },
    114: {
        dom : "come si calcolano le coordinate del centro di una sfera?",
        giusto : "C = (-a/2; -b/2; -c/2)",
        sbagliato : ["C = (-a; -b; -c)", "C = (a/2; b/2; c/2)", "C = (a<sup>2</sup>/4 ; b<sup>2</sup>/4; c<sup>2</sup>/4)"],
    },
    115: {
        dom : "come si calcola il raggio di una sfera?",
        giusto : "r = √(a<sup>2</sup>/4 + b<sup>2</sup>/4 + c<sup>2</sup>/4 - d)",
        sbagliato : ["r = √(a<sup>2</sup>/2 + b<sup>2</sup>/2 + c<sup>2</sup>/2 -d)", "r = √(a<sup>2</sup>/4 + b<sup>2</sup>/4 - c<sup>2</sup>/4 - d)", "r = √(a/4 + b/4 - c/4 + d)"],
    },
    116: {
        dom : "qual'è il risultato di A ∪ B ?",
        giusto : "il risultato è un insieme composto da tutti gli elementi di A e di B",
        sbagliato : ["il risultato è un insieme composto da alcuni degli elementi di A e di B", "il risultato è un insieme composto da tutti gli elementi di A", "il risultato è un insieme composto da tutti gli elementi di B"],
    },
    117: {
        dom : "qual'è il risultato di A ∩ B ?",
        giusto : "il risultato è un insieme composto dagli elementi di A presenti in B",
        sbagliato : ["il risultato è un insieme composto da alcuni degli elementi di A e di B", "il risultato è un insieme composto da tutti gli elementi di A e di B", "il risultato è un insieme composto da alcuni degli elementi di A presenti in B"],
    },
    118: {
        dom : "quando una condizione è necessaria?",
        giusto : "quando la sua ipotesi conferma la tesi, e senza essa la tesi non sarebbe mai confermata",
        sbagliato : ["quando la sua ipotesi conferma la tesi, e senza essa la tesi potrebbe comunque essere confermata", "quando la sua ipotesi non conferma la tesi, e la tesi non viene mai confermata", "quando la sua ipotesi non conferma la tesi, ma la tesi viene confermata"],
    },
    119: {
        dom : "quando una condizione è sufficiente?",
        giusto : "quando la sua ipotesi conferma la tesi, e senza essa la tesi potrebbe comunque essere confermata",
        sbagliato : ["quando la sua ipotesi conferma la tesi, e senza essa la tesi non sarebbe mai confermata", "quando la sua ipotesi non conferma la tesi, e la tesi non viene mai confermata", "quando la sua ipotesi non conferma la tesi, ma la tesi viene confermata"],
    },
    120: {
        dom : "quando una condizione è necessaria e sufficiente?",
        giusto : "quando tesi e ipotesi sono interscambiabili",
        sbagliato : ["quando la sua ipotesi conferma la tesi, e senza essa la tesi non sarebbe mai confermata", "quando la sua ipotesi non conferma la tesi, e la tesi non viene mai confermata", "quando la sua ipotesi non conferma la tesi, ma la tesi viene confermata"],
    },
    121: {
        dom : "cosa si intende per disposizioni semplici D (n, k) ?",
        giusto : "il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, senza ripetizioni",
        sbagliato : ["il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, con ripetizioni", "il modo in cui è posibile raggruppare k elementi senza ripetizione", "il modo in cui è posibile raggruppare k elementi con ripetizione"],
    },
    122: {
        dom : "come si calcolano le disposizioni semplici D (n, k) ?",
        giusto : "D(n,k) =  n * (n-1).... (n-k+1)",
        sbagliato : ["D(n,k) =  n!", "D(n,k) =  n<sup>k</sup>", "D(n,k) =  n! / k!"],
    },
    123: {
        dom : "cosa si intende per disposizioni con ripetizione D' (n, k) ?",
        giusto : "il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, con ripetizioni",
        sbagliato : ["il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, senza ripetizioni", "il modo in cui è posibile raggruppare k elementi senza ripetizione", "il modo in cui è posibile raggruppare k elementi con ripetizione"],
    },
    124: {
        dom : "come si calcolano le disposizioni con ripetizione D' (n, k) ?",
        giusto : "D'(n,k) =  n<sup>k</sup>",
        sbagliato : ["D'(n,k) =  n!", "D'(n,k) =  n * (n-1).... (n-k+1)", "D'(n,k) =  n! / k!"],
    },
    125: {
        dom : "cosa si intende per permutazioni semplici P(n) ?",
        giusto : "il modo in cui è posibile ordinare n elementi senza ripetizione",
        sbagliato : ["il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, senza ripetizioni", "il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, con ripetizioni", "il modo in cui è posibile raggruppare k elementi con ripetizione"],
    },
    126: {
        dom : "come si calcolano le permutazioni semplici P(n) ?",
        giusto : "P(n) =  n!",
        sbagliato : ["P(n) =  n<sup>k</sup>", "P(n) =  n * (n-1).... (n-k+1)", "P(n) =  n! / k!"],
    },
    127: {
        dom : "cosa si intende per permutazioni con ripetizione P'(n)<sup>(h, k,....)</sup> ?",
        giusto : "il modo in cui è posibile ordinare n elementi con ripetizione sapendo che ci sono h ripetizioni di un tipo, k di un altro...",
        sbagliato : ["il numero di combinazioni in cui si possono disporre k e h elementi presi da un gruppo di n, senza ripetizioni", "il numero di combinazioni in cui si possono disporre h elementi presi da un gruppo di k, con ripetizioni", "il modo in cui è posibile raggruppare k * h elementi con ripetizione"],
    },
    128: {
        dom : "come si calcolano le permutazioni con ripetizione P'(n)<sup>(h, k,....)</sup> ?",
        giusto : "P'(n)<sup>(h, k,....)</sup> =  n! / h! * k!...",
        sbagliato : ["P'(n) =  n<sup>k</sup>", "P'(n) =  n * (n-1).... (n-k+1)", "P'(n) =  n! / k!"],
    },
    129: {
        dom : "cosa si intende per combinazioni semplici C(n, k) ?",
        giusto : "il numero di combinazioni di n elementi in gruppi di k senza ripetizione",
        sbagliato : ["il numero di combinazioni in cui si possono disporre n elementi presi da un gruppo di k, senza ripetizioni", "il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, con ripetizioni", "il modo in cui è posibile raggruppare k * n elementi con ripetizione"],
    },
    130: {
        dom : "come si calcolano le combinazioni semplici C(n, k) ?",
        giusto : "C(n, k) =  n! / k! (n-k)!",
        sbagliato : ["C(n, k) =  n! /(n-k)!", "C(n, k) =  n! / k!", "C(n, k) =  n! / k! (k)!"],
    },
    131: {
        dom : "cosa si intende per combinazioni con ripetizione C'(n, k) ?",
        giusto : "il numero di combinazioni di n elementi in gruppi di k ripetendo ogni elemento al massimo k volte",
        sbagliato : ["il numero di combinazioni in cui si possono disporre n elementi presi da un gruppo di k, senza ripetizioni", "il numero di combinazioni in cui si possono disporre k elementi presi da un gruppo di n, con ripetizioni", "il modo in cui è posibile raggruppare k * n elementi con ripetizione"],
    },
    132: {
        dom : "come si calcolano le combinazioni con ripetizione C'(n, k) ?",
        giusto : "C'(n, k) =  (n+k-1)! / k! (n-1)!",
        sbagliato : ["C'(n, k) =  n! /(n-k)!", "C'(n, k) =  n! / k!", "C'(n, k) =  n! / k! (k)!"],
    },
    133: {
        dom : "come si calcola la media aritmetica di n valori ?",
        giusto : "M = Σn/ n",
        sbagliato : ["M = Σn", "M = Σn * n", "M = n * n"],
    },
    134: {
        dom : "come si calcola la media ponderata di n valori ?",
        giusto : "P = Σ(x * n)/ Σx",
        sbagliato : ["P = Σ(x * n)/ x", "P = Σ(n)/ Σx", "P = n / x"],
    },
    135: {
        dom : "come si calcola la media geometrica di n valori ?",
        giusto : "G = <sup>n</sup>√(x1 * x2 * .... * xn)",
        sbagliato : ["G = (x1 * x2 * .... * xn)", "G = <sup>n</sup>√(x1 + x2 + .... + xn)", "G = (x1 + x2 + .... + xn)"],
    },
    136: {
        dom : "come si calcola la media armonica di n valori ?",
        giusto : "A = 1 / (Σ1/xn)(n)",
        sbagliato : ["A = n / (Σ1/xn)", "A = 1 / (Σ1/xn)", "A = 1 / (1/xn)(n)"],
    },
    137: {
        dom : "come si calcola la media quadratica di n valori ?",
        giusto : "Q = √(Σxn<sup>2</sup> / n)",
        sbagliato : ["Q = √(Σxn<sup>2</sup>)", "Q = (Σxn<sup>2</sup> / n)", "Q = √(xn<sup>2</sup> / n)"],
    },
    138: {
        dom : "come si calcola la varianza di n valori ?",
        giusto : "σ<sup>2</sup> = Σ(xn-M)<sup>2</sup> / n)",
        sbagliato : ["σ = Σ(xn-M)<sup>2</sup> / n", "σ<sup>2</sup> = Σ(xn)<sup>2</sup> / n", "σ = Σ(xn-M) / n"],
    },
    139: {
        dom : "come si calcola l'area di un triangolo qualsiasi ?",
        giusto : "A = l1 * l2 * sin α / 2",
        sbagliato : ["A = l1 * sin α / 2", "A = l1 * l2 * sin α / 4", "A = l1 * l2 / 2"],
    },
    140: {
        dom : "qual'è il teorema della corda?",
        giusto : "AB = 2r * sin α",
        sbagliato : ["AB = r * sin α", "AB = 2r", "AB = 2r * sin α / 2"],
    },
    141: {
        dom : "qual'è il teorema del seno?",
        giusto : "a / sin α = b / sin β = c/ sin γ = 2r",
        sbagliato : ["sin α = sin β = sin γ = 2r", "a / sin α = b / sin β = c/ sin γ = r", "a = b = c = 2r"],
    },
    142: {
        dom : "qual'è il teorema del coseno?",
        giusto : "c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab * cos γ",
        sbagliato : ["c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> cos γ", "c<sup>2</sup> = (a + b) * cos γ", "c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>"],
    },
    143: {
        dom : "come si calcola l'ingrandimento di un oggetto?",
        giusto : "hi/ho V -di/do",
        sbagliato : ["hi/ho ^ -di/do", "hi/ho V di/do", "hi/ho ^ di/do"],
    },
    144: {
        dom : "qual'è la legge di Snell?",
        giusto : "n<sub>i</sub> * sin i = n<sub>r</sub> * sin r ",
        sbagliato : ["n<sub>i</sub> * sin r = n<sub>r</sub> * sin i ", "n<sub>i</sub> / sin i = n<sub>r</sub> / sin r ", "n<sub>i</sub> / sin r = n<sub>r</sub> / sin i "],
    },
    145: {
        dom : "qual'è la legge oraria del moto rettilineo uniforme?",
        giusto : "x = x<sub>0</sub> + v * t",
        sbagliato : ["x = x<sub>0</sub> + 1 / 2 v * t", "x<sub>0</sub> = x + v * t", "x = x<sub>0</sub> + v * t<sup>2</sup>"],
    },
    146: {
        dom : "qual'è la legge oraria del moto uniformemente accelerato?",
        giusto : "x = x<sub>0</sub> + v<sub>0</sub> * t + 1 / 2 at<sup>2</sup>",
        sbagliato : ["x = x<sub>0</sub> + v<sub>0</sub> * t + at<sup>2</sup>", "x = x<sub>0</sub> + t + 1 / 2 at<sup>2</sup>", "x = v<sub>0</sub> * t + 1 / 2 at<sup>2</sup>"],
    },
    147: {
        dom : "come si calcola la velocità nel moto uniformemente accelerato?",
        giusto : "v = v<sub>0</sub> + at",
        sbagliato : ["v = v<sub>0</sub> * t + at<sup>2</sup>", "v = v<sub>0</sub> + 1 / 2 at<sup>2</sup>", "x = v<sub>0</sub> * t + 1 / 2 at<sup>2</sup>"],
    },
    148: {
        dom : "come si calcola il tempo di caduta nel moto di caduta libera?",
        giusto : "t = √(-2h/g)",
        sbagliato : ["t = √(-h/g)", "t = -2h/g", "t = √(2h/g)"],
    },
    149: {
        dom : "come si suddivide il moto parabolico?",
        giusto : "nell'asse x moto rettilineo uniforme, nell'asse y moto di caduta libera",
        sbagliato : ["nell'asse x moto di caduta libera, nell'asse y moto rettilineo uniforme", "nell'asse x moto rettilineo uniforme, nell'asse y moto parabolico", "nell'asse x moto parabolico, nell'asse y moto di caduta libera"],
    },
    150: {
        dom : "come si calcola l'altezza massima nel moto parabolico?",
        giusto : "y = (V<sub>0y</sub>) <sup>2</sup> / 2g",
        sbagliato : ["y = (V<sub>0y</sub>) / 2g", "y = (V<sub>0y</sub>) <sup>2</sup> / g", "y = (V<sub>0y</sub>) / g"],
    },
    151: {
        dom : "come si calcola il tempo di volo nel moto parabolico?",
        giusto : "t = 2(V<sub>0y</sub>)/ g",
        sbagliato : ["t = (V<sub>0y</sub>) / 2g", "t = (V<sub>0y</sub>) <sup>2</sup> / g", "t = 2(V<sub>0y</sub>) / 2g"],
    },
    152: {
        dom : "come si calcola la gittata nel moto parabolico?",
        giusto : "G = 2(V<sub>0y</sub> V<sub>0x</sub>)/ g",
        sbagliato : ["G = (V<sub>0y</sub> V<sub>0x</sub>) / 2g", "G = 2 (V<sub>0</sub>) <sup>2</sup> / g", "G = (V<sub>0</sub>) <sup>2</sup> /  2g"],
    },
    153: {
        dom : "come si calcola la gittata massima nel moto parabolico?",
        giusto : "G = (V<sub>0</sub>) <sup>2</sup> /  g",
        sbagliato : ["G = (V<sub>0y</sub> V<sub>0x</sub>) / 2g", "G = 2 (V<sub>0</sub>) <sup>2</sup> / g", "G = 2(V<sub>0y</sub> V<sub>0x</sub>)/ g"],
    },
    154: {
        dom : "come si calcola la velocità tangenziale nel moto circolare?",
        giusto : "v = 2πr/T",
        sbagliato : ["v = πr/T", "v = 2πr", "v = 2π/T"],
    },
    155: {
        dom : "come si calcola la velocità angolare nel moto circolare?",
        giusto : "w = 2π/T",
        sbagliato : ["w = πr/T", "w = 4π/T", "w = 2π/2  T"],
    },
    156: {
        dom : "come si calcola l'accelerazione centripeta nel moto circolare?",
        giusto : "a<sub>c</sub> = v<sup>2</sup> / r",
        sbagliato : ["a<sub>c</sub> = v / r", "a<sub>c</sub> = v<sup>2</sup>", "a<sub>c</sub> = v<sup>2</sup> / 2r"],
    },
    157: {
        dom : "come si calcola l'accelerazione angolare nel moto circolare accelerato?",
        giusto : "α = Δw / Δt",
        sbagliato : ["α = w / Δt", "α = Δw / t", "α = Δw / 2t"],
    },
    158: {
        dom : "come si calcola l'accelerazione tangenziale nel moto circolare accelerato?",
        giusto : "a<sub>t</sub> = αr",
        sbagliato : ["a<sub>t</sub> = 2αr", "a<sub>t</sub> = αr/2", "a<sub>t</sub> = α/2"],
    },
    159: {
        dom : "come si calcola l'accelerazione totale nel moto circolare accelerato?",
        giusto : "a = √(a<sub>t</sub><sup>2</sup> + a<sub>c</sub><sup>2</sup>)",
        sbagliato : ["a = √(a<sub>t</sub><sup>2</sup> - a<sub>c</sub><sup>2</sup>)", "a = √(a<sub>t</sub> + a<sub>c</sub>)", "a = √(a<sub>t</sub><sup>2</sup> * a<sub>c</sub><sup>2</sup>)"],
    },
    160: {
        dom : "come si calcola l'angolo nel moto circolare accelerato?",
        giusto : "0 = 0<sub>0</sub> + w<sub>0</sub>t + 1/2 αt<sup>2</sup>",
        sbagliato : ["0 = w<sub>0</sub>t + 1/2 αt<sup>2</sup>", "0 = 0<sub>0</sub> + 2w<sub>0</sub>t + 1/2 αt<sup>2</sup>", "0 = 0<sub>0</sub> + w<sub>0</sub>t + αt<sup>2</sup>"],
    },
    161: {
        dom : "cosa dice il primo principio della dinamica?",
        giusto : "Se un corpo non subisce forze o è fermo o si muove di moto rettilineo uniforme",
        sbagliato : ["F = m * a", "Ad ogni azione corrisponde una reazione uguale e contraria", "Maggiore la massa maggiore la forza di attrazione"],
    },
    162: {
        dom : "cosa dice il secondo principio della dinamica?",
        giusto : "F = m * a",
        sbagliato : ["Se un corpo non subisce forze o è fermo o si muove di moto rettilineo uniforme", "Ad ogni azione corrisponde una reazione uguale e contraria", "Maggiore la massa maggiore la forza di attrazione"],
    },
    163: {
        dom : "cosa dice il terzo principio della dinamica?",
        giusto : "Ad ogni azione corrisponde una reazione uguale e contraria",
        sbagliato : ["Se un corpo non subisce forze o è fermo o si muove di moto rettilineo uniforme", "F = m * a", "Maggiore la massa maggiore la forza di attrazione"],
    },
    164: {
        dom : "come si calcola la forza peso?",
        giusto : "F = m * g",
        sbagliato : ["F = m * a", "F = m / g", "2F = m * g"],
    },
    165: {
        dom : "come si calcola la forza di attrito?",
        giusto : "F<sub>a</sub> = u<sub>a</sub> * F⟂",
        sbagliato : ["F<sub>a</sub> = F⟂", "F<sub>a</sub> = 2u<sub>a</sub> * F⟂", "F<sub>a</sub> = u<sub>a</sub> * 2F⟂"],
    },
    166: {
        dom : "come si calcola la forza elastica?",
        giusto : "F<sub>e</sub> = -kx",
        sbagliato : ["F<sub>e</sub> = -2kx", "F<sub>e</sub> = -kx/2", "F<sub>e</sub> = kx"],
    },
    167: {
        dom : "come si calcola il lavoro?",
        giusto : "L = F * s",
        sbagliato : ["L = F * 2s", "L = 2F * s", "L = F * s / 2"],
    },
    168: {
        dom : "come si calcola l'energia cinetica?",
        giusto : "K = 1/2 mv<sup>2</sup>",
        sbagliato : ["K = mv<sup>2</sup>", "K = 2mv<sup>2</sup>", "K = mv"],
    },
    169: {
        dom : "come si calcola l'energia potenziale?",
        giusto : "U = -L",
        sbagliato : ["U = L", "U = 2L", "U = -2L"],
    },
    170: {
        dom : "come si calcola l'energia meccanica?",
        giusto : "E = K + U",
        sbagliato : ["E = 2K + U", "E = K + 2U", "E = K - U"],
    },
    171: {
        dom : "come si calcola la Potenza?",
        giusto : "W = F * v",
        sbagliato : ["W = L * t", "W = F / v", "W = F - v"],
    },
    172: {
        dom : "come si calcola la quantità di moto?",
        giusto : "P = mv",
        sbagliato : ["P = mv<sup>2</sup>", "P = mv/2", "P = 2mv"],
    },
    173: {
        dom : "Qual'è la legge di Gravitazione Universale?",
        giusto : "F = G * m1 * m2 / d<sup>2</sup>",
        sbagliato : ["F = G * m1 * m2 / d", "F = m1 * m2 / d", "F = G * m2 / d<sup>2</sup>"],
    },
    174: {
        dom : "Quanto vale la costante di Gravitazione Universale?",
        giusto : "G = 6,7 * 10 <sup>-11</sup>",
        sbagliato : ["G = 6,7 * 10 <sup>-10</sup>", "G = 6,5 * 10 <sup>-11</sup>", "G = 6,5 * 10 <sup>-10</sup>"],
    },
    175: {
        dom : "Quanto vale l'accelerazione di gravità su un pianeta?",
        giusto : "g = G M / r<sup>2</sup>",
        sbagliato : ["g = G M / r", "g = G M / 2r<sup>2</sup>", "g = 2G M / r<sup>2</sup>"],
    },
    176: {
        dom : "Cosa dice la prima legge di Keplero?",
        giusto : "i pianeti compiono orbite ellittiche e il Sole è uno dei due fuochi",
        sbagliato : ["i pianeti compiono orbite ellittiche e il Sole è al centro", "i pianeti compiono orbite circolai e il Sole è al centro", "il Sole compie un orbita ellittica attorno alla Terra"],
    },
    177: {
        dom : "Cosa dice la seconda legge di Keplero?",
        giusto : "in un orbita si compiono aree uguali in tempi uguali",
        sbagliato : ["in un orbita ogni area ha tempo uguale", "i pianeti compiono orbite ellittiche e il Sole è uno dei due fuochi", "il tempo di rivoluzione dipende dal raggio del pianeta"],
    },
    178: {
        dom : "Cosa dice la terza legge di Keplero?",
        giusto : "T<sup>2</sup> = 4π<sup>2</sup>/GM * d <sup>3</sup>",
        sbagliato : ["T = 4π<sup>2</sup>/GM * d <sup>3</sup>", "T<sup>2</sup> = 2π<sup>2</sup>/GM * d <sup>3</sup>", "T = 4π<sup>2</sup>/GM"],
    },
    179: {
        dom : "Come si calcola il campo gravitazionale?",
        giusto : "g = -G M / r<sup>2</sup>",
        sbagliato : ["g = -G M / 2 r<sup>2</sup>", "g = -2G M / r<sup>2</sup>", "g = -G M / r"],
    },
    180: {
        dom : "Come si calcola l'energia potenziale gravitazionale?",
        giusto : "U = - G M m / r",
        sbagliato : ["L = - G M m / r", "U = - G M m / r <sup>2</sup>", "U = - 2G M m / r <sup>2</sup>"],
    },
    181: {
        dom : "Come si produce un'orbita geostazionaria?",
        giusto : "eguagliando forza gravitazionale e forza centrifuga",
        sbagliato : ["eguagliando forza gravitazionale e forza d'attrito gravitazionale", "eguagliando forza elastica e forza centrifuga gravitazionale", "eguagliando forza d'attrito e forza centrifuga gravitazionale"],
    },
    182: {
        dom : "Quando si ha un sistema termodinamico aperto?",
        giusto : "quando viene permesso lo scambio sia di energia sia di materia",
        sbagliato : ["quando viene permesso lo scambio di energia ma non di materia", "quando viene permesso lo scambio di materia ma non di energia", "quando non viene permesso nè lo scambio di energia nè lo scambio di materia"],
    },
    183: {
        dom : "Quando si ha un sistema termodinamico chiuso?",
        giusto : "quando viene permesso lo scambio di energia ma non di materia",
        sbagliato : ["quando viene permesso lo scambio sia di energia sia di materia", "quando viene permesso lo scambio di materia ma non di energia", "quando non viene permesso nè lo scambio di energia nè lo scambio di materia"],
    },
    184: {
        dom : "Quando si ha un sistema termodinamico isolato?",
        giusto : "quando non viene permesso nè lo scambio di energia nè lo scambio di materia",
        sbagliato : ["quando viene permesso lo scambio sia di energia sia di materia", "quando viene permesso lo scambio di materia ma non di energia", "quando viene permesso lo scambio di energia ma non di materia"],
    },
    185: {
        dom : "Quando si raggiunge l'equilibrio termico?",
        giusto : "quando la temperatura si uguaglia nel sistema",
        sbagliato : ["quando la pressione si uguaglia nel sistema", "quando il volume si uguaglia nel sistema", "quando la temperatura e la pressione si uguagliano nel sistema"],
    },
    186: {
        dom : "Qual'è il principio 0 della termodinamica?",
        giusto : "se i due corpi sono singolarmente in equilibrio con un terzo corpo allora lo sono anche tra loro",
        sbagliato : ["ΔU = Q - W", "E' impossibile che un processo abbia come unico risultato il passaggio di calore da una sorgente con T < ad una con T >", "In una trasformazione reversibile l'entropia tende a 0 quando i K tendono a 0"],
    },
    187: {
        dom : "Quanti K sono 0° C?",
        giusto : "273,15",
        sbagliato : ["280", "243,15", "279,80"],
    },
    188: {
        dom : "Quanti °F sono x° C?",
        giusto : "9/5 x + 32",
        sbagliato : ["9/5 + x + 32", "8/5 x + 32", "9/8 x + 32"],
    },
    189: {
        dom : "Come si calcola la Dilatazione Termica Lineare?",
        giusto : "ΔL = αL<sub>0</sub> * ΔT",
        sbagliato : ["ΔL = αL<sub>0</sub> + ΔT", "ΔL = αL<sub>0</sub> / ΔT", "ΔL = αL<sub>0</sub> - ΔT"],
    },
    190: {
        dom : "Come si calcola la Dilatazione Termica Superficiale?",
        giusto : "ΔS = 2αS<sub>0</sub> * ΔT",
        sbagliato : ["ΔS = 2αS<sub>0</sub> + ΔT", "ΔS = 2αS<sub>0</sub> / ΔT", "ΔS = 2αS<sub>0</sub> - ΔT"],
    },
    191: {
        dom : "Come si calcola la Dilatazione Termica Volumica?",
        giusto : "ΔV = 3αV<sub>0</sub> * ΔT",
        sbagliato : ["ΔV = 3αV<sub>0</sub> + ΔT", "ΔV = 3αS<sub>0</sub> / ΔT", "ΔV = 3αS<sub>0</sub> - ΔT"],
    },
    192: {
        dom : "A cosa corrisponde una caloria?",
        giusto : "alla quantità di calore necessaria ad un grammo di acqua per passare da 14,5 a 15,5 °C",
        sbagliato : ["alla quantità di calore necessaria ad un kilogrammo di acqua per passare da 14,5 a 15,5 °C", "alla quantità di calore necessaria ad un grammo di acqua per passare da 13,5 a 15,5 °C", "alla quantità di calore necessaria ad un kilogrammo di acqua per passare da 13,5 a 15,5 °C"],
    },
    193: {
        dom : "A quanti Joule corrisponde una caloria?",
        giusto : "1 kcal = 4,186 J",
        sbagliato : ["1 kcal = 4,176 J", "1 kcal = 4,167 J", "1 kcal = 4,168 J"],
    },
    194: {
        dom : "Cos'è il calore specifico di un materiale?",
        giusto : "E' una grandezza che identifica la quantità di calore da fornire ad un kg di materiale per aumentare la sua temperatura di un grado",
        sbagliato : ["E' una grandezza che identifica la quantità di calore da fornire ad un grammo di materiale per aumentare la sua temperatura di un grado", "E' una grandezza che identifica la quantità di calore da fornire ad un kg di materiale per aumentare la sua temperatura di 10° C", "E' una grandezza che identifica la quantità di calore da fornire ad un grammo di materiale per aumentare la sua temperatura di 10° C"],
    },
    195: {
        dom : "come calcolo la quantità di calore da fornire a m kg di materia per alzare la sua temperatura di t",
        giusto : "Q = c * m * t",
        sbagliato : ["Q = c * m / t", "Q = c / m * t", "Q = c * t / m"],
    },
    196: {
        dom : "Cos'è la capacità termica di un materiale?",
        giusto : "Grandezza che indica la quantità di energia per alzare la temperatura di un 1 K",
        sbagliato : ["Grandezza che indica la quantità di energia per alzare la temperatura di un 1 °C", "Grandezza che indica la quantità di energia per spostare un 1 Kg di sostanza", "Grandezza che indica la quantità di energia per spostare un 1 g di sostanza"],
    },
    197: {
        dom : "Come si calcola la capacità termica di un materiale?",
        giusto : "C = m * c",
        sbagliato : ["C = T * c", "C = m * c * T", "C = m * T"],
    },
    198: {
        dom : "Qual'è il primo principio della calorimetria?",
        giusto : "Q<sub>ass</sub> = - Q<sub>ced</sub>",
        sbagliato : ["Q<sub>ass</sub> = Q<sub>ced</sub>", "Q<sub>ass</sub> - Q<sub>ced</sub> = 0", "Q<sub>ass</sub> / Q<sub>ced</sub> = 0"],
    },
    199: {
        dom : "Cos'è il calore latente di un materiale?",
        giusto : "La quantità di calore da fornire ad un kg di materiale per far avvenire un passaggio di stato",
        sbagliato : ["La quantità di calore da fornire ad un kg di materiale per farlo fondere", "La quantità di calore da fornire ad un kg di materiale per farlo evaporare", "La quantità di calore da fornire ad un kg di materiale per farlo sublimare"],
    },
    200: {
        dom : "Come calcolo la quantità di calore per un passaggio di stato?",
        giusto : "Q = m * L",
        sbagliato : ["Q = m / L", "Q = m + L", "Q = m - L"],
    },
    201: {
        dom : "Come calcolo la temperatura di equilibrio tra due corpi?",
        giusto : "T<sub>eq</sub> = c1m1T1 + c2m2T2 / c1m1+c2m2",
        sbagliato : ["T<sub>eq</sub> = c1m1T1 - c2m2T2 / c1m1-c2m2", "T<sub>eq</sub> = c1m1T1 - c2m2T2 / c1m1+c2m2", "T<sub>eq</sub> = c1m1T1 + c2m2T2 / c1m1-c2m2"],
    },
    202: {
        dom : "Come avviene lo scambio di calore per Conduzione?",
        giusto : "Tramite il contatto",
        sbagliato : ["Tramite il movimento di materia", "Tramite onde elettromagnetiche", "Tramite la luce"],
    },
    203: {
        dom : "Come avviene lo scambio di calore per Convezione?",
        giusto : "Tramite il movimento di materia",
        sbagliato : ["Tramite il contatto", "Tramite onde elettromagnetiche", "Tramite la luce"],
    },
    204: {
        dom : "Come avviene lo scambio di calore per Irraggiamento?",
        giusto : "Tramite onde elettromagnetiche",
        sbagliato : ["Tramite il movimento di materia", "Tramite il contatto", "Tramite la luce"],
    },
    205: {
        dom : "Cosa dice la legge di Fourier?",
        giusto : "Q = kA * ΔT/L * Δt",
        sbagliato : ["Q = k * ΔT/L * Δt", "Q = kA * ΔT * L * Δt", "Q = kA * ΔT * L / Δt"],
    },
    206: {
        dom : "Cosa dice la legge di Boyle?",
        giusto : "se T cost => p*V cost",
        sbagliato : ["se T*V cost => p cost", "se T*p cost => V cost", "se T*p cost => p*V cost"],
    },
    207: {
        dom : "Cosa dice la prima legge di Gay-Lussac?",
        giusto : "se p cost => V = V<sub>0</sub> (1 + T/273,15)",
        sbagliato : ["se V cost => p = p<sub>0</sub> (1 + T/273,15)", "se p cost => V = V<sub>0</sub> (1 + T)", "se V cost => p = p<sub>0</sub> (1 + T)"],
    },
    208: {
        dom : "Cosa dice la seconda legge di Gay-Lussac?",
        giusto : "se V cost => p = p<sub>0</sub> (1 + T/273,15)",
        sbagliato : ["se p cost => V = V<sub>0</sub> (1 + T/273,15)", "se p cost => V = V<sub>0</sub> (1 + T)", "se V cost => p = p<sub>0</sub> (1 + T)"],
    },
    209: {
        dom : "Cosa dice la legge dei Gas Perfetti?",
        giusto : "p*V = nRT",
        sbagliato : ["p/V = nRT", "p*V = n/RT", "p/V = n/RT"],
    },
    210: {
        dom : "Come si calcola il lavoro di un gas?",
        giusto : "W = p*ΔV",
        sbagliato : ["W = p/ΔV", "W = p*ΔV*T", "W = p/ΔV*T"],
    },
    211: {
        dom : "Cosa vuol dire che una trasformazione è reversibile?",
        giusto : "che ΔU<sub>ab</sub> = -ΔU<sub>ba</sub>",
        sbagliato : ["che ΔU<sub>ab</sub> = ΔU<sub>ba</sub>", "che ΔU<sub>ab</sub> - ΔU<sub>ba</sub> = 0", "che ΔU<sub>ab</sub> = 0"],
    },
    212: {
        dom : "Cosa vuol dire che una trasformazione è irreversibile?",
        giusto : "che ΔU<sub>ab</sub> != -ΔU<sub>ba</sub>",
        sbagliato : ["che ΔU<sub>ab</sub> != ΔU<sub>ba</sub>", "che ΔU<sub>ab</sub> - ΔU<sub>ba</sub> != 0", "che ΔU<sub>ab</sub> != 0"],
    },
    213: {
        dom : "Cosa vuol dire che una trasformazione è isoterma?",
        giusto : "che la temperatura è costante",
        sbagliato : ["che la pressione è costante", "che il volume è costante", "che non ci sono scambi di calore tra il sistema e l'ambiente"],
    },
    214: {
        dom : "Cosa vuol dire che una trasformazione è isocora?",
        giusto : "che il volume è costante",
        sbagliato : ["che la temperatura è costante", "che il volume è costante", "che non ci sono scambi di calore tra il sistema e l'ambiente"],
    },
    215: {
        dom : "Cosa vuol dire che una trasformazione è isobara?",
        giusto : "che la pressione è costante",
        sbagliato : ["che la temperatura è costante", "che la pressione è costante", "che non ci sono scambi di calore tra il sistema e l'ambiente"],
    },
    216: {
        dom : "Cosa vuol dire che una trasformazione è adiabatica?",
        giusto : "che non ci sono scambi di calore tra il sistema e l'ambiente",
        sbagliato : ["che la temperatura è costante", "che la pressione è costante", "che il volume è costante"],
    },
    217: {
        dom : "Cosa vuol dire che un ciclo è termodinamico?",
        giusto : "un ciclo in cui lo stato iniziale e finale coincidono",
        sbagliato : ["un ciclo a 4 tempi", "una macchina termica", "un automobile"],
    },
    218: {
        dom : "Cos'è una macchina termica?",
        giusto : "un dispositivo che permette di assorbire calore e convertirlo in lavoro",
        sbagliato : ["un dispositivo che permette di passare dal lavoro al calore", "una stufa a gas", "un ciclo a temperatura costante"],
    },
    219: {
        dom : "come si calcola l'efficienza di una macchina termica?",
        giusto : "η = 1 - |Tf|/Tc",
        sbagliato : ["η = 1 - |Tc|/Tf", "η = |Tf|/Tc", "η = |Tc|/Tf"],
    },
    220: {
        dom : "come si calcola l'efficienza nel ciclo frigorifero?",
        giusto : "η =  Qa/ |W|",
        sbagliato : ["η = W / |Qa|", "η = W / |Qc|", "η = W / |Qa|"],
    },
    221: {
        dom : "come si calcola il numero di collisioni di un gas in una superficie A?",
        giusto : "N = 1/2 n/V * v<sub>x</sub> * Δt * A",
        sbagliato : ["N = n/V * v<sub>x</sub> * Δt * A", "N = 1/2 n/V * Δt * A", "N = 1/2 n/V * v<sub>x</sub> * A"],
    },
    222: {
        dom : "come si calcola la forza esercitata da un Volume di gas?",
        giusto : "F = n/V * m * A * (v<sub>x</sub>)<sup>2</sup>",
        sbagliato : ["F = n/V * m * A + (v<sub>x</sub>)<sup>2</sup>", "F = n/V * m * A / (v<sub>x</sub>)<sup>2</sup>", "F = n/V * m * A - (v<sub>x</sub>)<sup>2</sup>"],
    },
    223: {
        dom : "come si calcola la pressione esercitata dalle molecole di un gas?",
        giusto : "p = n/V * m * (v<sub>x</sub>)<sup>2</sup> ",
        sbagliato : ["p = n/V * m * A + (v<sub>x</sub>)<sup>2</sup>", "p = n/V * m * A / (v<sub>x</sub>)<sup>2</sup>", "p = n/V * m * A - (v<sub>x</sub>)<sup>2</sup>"],
    },
    224: {
        dom : "come si calcola l'entropia?",
        giusto : "se T cost =>  s = Q/T",
        sbagliato : ["se T cost => s = T/Q", "s = Q/T", "s = T/Q"],
    },
    225: {
        dom : "come si calcola l'energia inutilizzabile?",
        giusto : "E = s * Tmin",
        sbagliato : ["E = s * Tmax", "E = s / Tmin", "E = s / Tmax"],
    },
    226: {
        dom : "come si calcola l'entalpia?",
        giusto : "H = U + p * V",
        sbagliato : ["H = U * p * V", "H = U - p * V", "H = U / p * V"],
    },
    227: {
        dom : "come si calcola l'energia libera di Gibbs?",
        giusto : "G = H - T * s",
        sbagliato : ["G = H + T * s", "G = H * T * s", "G = H / T * s"],
    }, 
    228: {
        dom : "qual'è la frequenza di suono udibile?",
        giusto : "20 - 20000 Hz",
        sbagliato : ["50 - 50000 Hz", "30 - 30000 Hz", "40 - 40000 Hz"],
    }, 
    229: {
        dom : "qual'è la velocità del suono nell'aria?",
        giusto : "343 m/s",
        sbagliato : ["434 m/s", "505 m/s", "300 m/s"],
    }, 
    230: {
        dom : "come si calcola l'intensità del suono?",
        giusto : "I = W/A",
        sbagliato : ["I = A/W", "I = W * A", "I = W + A"],
    },
    231: {
        dom : "come si converte l'intensità in db?",
        giusto : "B = 10 log<sub>10</sub>(I/I<sub>0</sub>)",
        sbagliato : ["B = 100 log<sub>10</sub>(I/I<sub>0</sub>)", "B = log<sub>10</sub>(I)", "B = 10 log<sub>10</sub>(I)"],
    },
    232: {
        dom : "come si calcola l'effetto doppler?",
        giusto : "f<sub>r</sub> = f<sub>s</sub> ((1 ± Vr / v) / ( 1 ± Vs / v))",
        sbagliato : ["f<sub>r</sub> = f<sub>s</sub> ((1 + Vr / v) / ( 1 + Vs / v))", "f<sub>r</sub> = f<sub>s</sub> ((Vr / v) / (Vs / v))", "f<sub>s</sub> = f<sub>r</sub> ((1 ± Vr / v) / ( 1 ± Vs / v))"],
    },
    233: {
        dom : "quando si ha un'interferenza costruttiva?",
        giusto : "quando la differenza di cammino è = nλ",
        sbagliato : ["quando la differenza di cammino è = (n+1/2) λ", "quando la differenza di cammino è = 3nλ", "quando la differenza di cammino è = 3/2nλ"],
    },
    234: {
        dom : "quando si ha un'interferenza distruttiva?",
        giusto : "quando la differenza di cammino è = (n+1/2) λ",
        sbagliato : ["quando la differenza di cammino è = nλ", "quando la differenza di cammino è = 3nλ", "quando la differenza di cammino è = 3/2nλ"],
    },
    235: {
        dom : "quando si trovano frange chiare nell'interferenza?",
        giusto : "quando si ha interferenza costruttiva e sin0 = nλ",
        sbagliato : ["quando si ha interferenza distruttiva e sin0 = nλ", "quando si ha interferenza costruttiva e sin0 = (n+1/2)λ", "quando si ha interferenza distruttiva e sin0 = (n+1/2)λ"],
    },
    236: {
        dom : "quando si trovano frange scure nell'interferenza?",
        giusto : "quando si ha interferenza distruttiva e sin0 = (n+1/2)λ",
        sbagliato : ["quando si ha interferenza distruttiva e sin0 = nλ", "quando si ha interferenza costruttiva e sin0 = (n+1/2)λ", "quando si ha interferenza costruttiva e sin0 = nλ"],
    },
    237: {
        dom : "a che lunghezze d'onda è visibile la luce?",
        giusto : "tra i 380 e i 750 nm",
        sbagliato : ["tra i 380 e i 700 nm", "tra i 280 e i 750 nm", "tra i 280 e i 720 nm"],
    },
    238: {
        dom : "quando si trovano frange scure nella diffrazione?",
        giusto : "quando sin0 = (n)λ/d",
        sbagliato : ["quando sin0 = nλd", "quando sin0 = (n+1/2)λ/d", "quando sin0 = (n+1/2)λd"],
    },
    239: {
        dom : "quando si trova la prima frangia scura nel potere risolvente?",
        giusto : "quando sin0 = 1,22 λ/d",
        sbagliato : ["quando sin0 = 1,33 λ/d", "quando sin0 = 1,11 λ/d", "quando sin0 = 1,44 λ/d"],
    },
    240: {
        dom : "qual'è l'angolo minimo per avere due immagini?",
        giusto : "sin0 = 1,22 λ/d",
        sbagliato : ["sin0 = 1,33 λ/d", "sin0 = 1,11 λ/d", "sin0 = 1,44 λ/d"],
    },
    241: {
        dom : "quanto vale la carica di un elettrone?",
        giusto : "1,6 * 10<sup>-19</sup> C",
        sbagliato : ["1,6 * 10<sup>-20</sup> C", "1,4 * 10<sup>-19</sup> C", "1,4 * 10<sup>-20</sup> C"],
    },
    242: {
        dom : "com'è la carica di un protone?",
        giusto : "opposta a quella dell'elettrone ",
        sbagliato : ["nulla", "uguale a quella dell'elettrone", "uguale a quella del neutrone"],
    },
    243: {
        dom : "qual'è la legge di Coulomb?",
        giusto : "F = k |q1||q2| / r<sup>2</sup>",
        sbagliato : ["F = k q1q2 / r<sup>2</sup>", "F = k |q1||q2| / r", "F = k q1q2 / r"],
    },
    244: {
        dom : "quanto vale la k nella legge di Coulomb?",
        giusto : "8,99 * 10<sup>9</sup>",
        sbagliato : ["7,99 * 10<sup>8</sup>", "9 * 10<sup>8</sup>", "8,55 * 10<sup>9</sup>"],
    },
    245: {
        dom : "quanto vale la costante dielettrica?",
        giusto : "ε<sub>0</sub> = 1/4πk",
        sbagliato : ["ε<sub>0</sub> = 4πk", "ε<sub>0</sub> = 4/πk", "ε<sub>0</sub> = 4π/k"],
    },
    246: {
        dom : "quanto vale il campo elettrico su una carica di prova q<sub>0</sub>?",
        giusto : "E = F / q<sub>0</sub>",
        sbagliato : ["E = F * q<sub>0</sub>", "E = q<sub>0</sub> / F", "E = 1 / F * q<sub>0</sub>"],
    },
    247: {
        dom : "quanto vale il campo elettrico su una carica di prova q distante r da quella di prova?",
        giusto : "E = k|q| / r<sup>2</sup>",
        sbagliato : ["E =  r<sup>2</sup> / k|q|", "E = k|q| / r", "E =  r / k|q|"],
    },
    248: {
        dom : "quanto vale la densità di carica?",
        giusto : "σ = q / A",
        sbagliato : ["σ = A / q", "σ = q * A", "σ = q + A"],
    },
    249: {
        dom : "quanto vale il campo elettrico tra le armature di un condensatore?",
        giusto : "E = σ / ε<sub>0</sub>",
        sbagliato : ["E = ε<sub>0</sub> / σ", "E = A / ε<sub>0</sub>", "E = ε<sub>0</sub> / A"],
    },
    250: {
        dom : "come si calcola il flusso nel teorema di Gauss?",
        giusto : "Φ = E * A * cos α",
        sbagliato : ["Φ = E * A * sin α", "Φ = E / A * cos α", "Φ = E / A * sin α"],
    },
    251: {
        dom : "come si calcola il campo elettrico in un piano uniforme?",
        giusto : "E = σ / 2ε<sub>0</sub>",
        sbagliato : ["E = ε<sub>0</sub> / 2σ", "E = A / 2ε<sub>0</sub>", "E = ε<sub>0</sub> / 2A"],
    },
    252: {
        dom : "quanto vale la densità lineare?",
        giusto : "λ = q / l",
        sbagliato : ["λ = l / q", "λ = q * l", "λ = q + l"],
    },
    253: {
        dom : "quanto vale il campo elettrico a distanza r da un filo infinito?",
        giusto : "E = λ / 2πε<sub>0</sub> * r",
        sbagliato : ["E = 2λ / πε<sub>0</sub> * r", "E = λ / 2ε<sub>0</sub> * r", "E = λ / 3πε<sub>0</sub> * r"],
    },
    254: {
        dom : "quanto vale il campo elettrico all'interno di una sfera di raggio R?",
        giusto : "E = qr/4πε<sub>0</sub> * R<sup>3</sup>",
        sbagliato : ["E = q/4πε<sub>0</sub> * R<sup>3</sup>", "E = q/4πε<sub>0</sub> * R<sup>2</sup>", "E = qr/4πε<sub>0</sub> * R<sup>2</sup>"],
    },
    255: {
        dom : "quanto vale il campo elettrico all'esterno di una sfera a distanza r dal centro?",
        giusto : "E = q/4πε<sub>0</sub> * r<sup>2</sup>",
        sbagliato : ["E = qR/4πε<sub>0</sub> * r<sup>2</sup>", "E = qR/4πε<sub>0</sub> * r", "E = q/4πε<sub>0</sub> * r"],
    },
    256: {
        dom : "quanto vale il lavoro di un condensatore?",
        giusto : "L = qE * d",
        sbagliato : ["L = qE / d", "L = q / E * d", "L = q + E * d"],
    },
    257: {
        dom : "quanto vale l'energia potenziale tra due cariche?",
        giusto : "U = k * q1 * q2 / r",
        sbagliato : ["U = k * q1 / q2 * r", "U = 2k * q1 * q2 / r", "U = 2k * q1 / q2 * r"],
    },
    258: {
        dom : "come si calcola il potenziale?",
        giusto : "V = U / q<sub>0</sub>",
        sbagliato : ["V = kU / q<sub>0</sub>", "V = U / kq<sub>0</sub>", "V = U / 2q<sub>0</sub>"],
    },
    259: {
        dom : "quanto il potenziale di un carica a distanza r da q<sub>0</sub>?",
        giusto : "V = kq / r",
        sbagliato : ["V = 2kq / r", "V = kq / r<sup>2</sup>", "V = 2kq / r<sup>2</sup>"],
    },
    260: {
        dom : "quanto vale il campo elettrico in funzione del potenziale?",
        giusto : "E = - V / s",
        sbagliato : ["E = - 2V / s", "E =  2V / s", "E = V / s"],
    },
    261: {
        dom : "come si calcola la capacità di un condensatore?",
        giusto : "C = q / V",
        sbagliato : ["C = V / q", "C = 2q / V", "C = q / 2V"],
    },
    262: {
        dom : "come si calcola la forza elettro motrice?",
        giusto : "f.e.m = L / q",
        sbagliato : ["f.e.m = V / q", "f.e.m = L / V", "f.e.m = q / 2L"],
    },
    263: {
        dom : "cosa dice la prima legge di Ohm?",
        giusto : "V = I * R",
        sbagliato : ["V = I / R", "R = p * L / A", "R = p / L * A"],
    },
    264: {
        dom : "cosa dice la seconda legge di Ohm?",
        giusto : "R = p * L / A",
        sbagliato : ["V = I / R", "V = I * R", "R = p / L * A"],
    },
    265: {
        dom : "come si calcola la potenza elettrica?",
        giusto : "P = V * I",
        sbagliato : ["P = I * R", "P = V * R", "P = V / R"],
    },
    266: {
        dom : "come si calcola la resistenza equivalente di x resistenze in serie?",
        giusto : "R<sub>eq</sub> = ΣRx",
        sbagliato : ["R<sub>eq</sub> = xR", "R<sub>eq</sub> = ∏Rx", "R<sub>eq</sub> = Σ1/Rx"],
    },
    267: {
        dom : "come si calcola la resistenza equivalente di x resistenze in parallelo?",
        giusto : "R<sub>eq</sub> = Σ1/Rx",
        sbagliato : ["R<sub>eq</sub> = x/R", "R<sub>eq</sub> = ∏Rx", "R<sub>eq</sub> = ΣRx"],
    },
    268: {
        dom : "cosa dice la prima legge di kirchhoff?",
        giusto : "la corrente entrante in un nodo deve essere equivalente a quella uscente",
        sbagliato : ["in un circuito chiuso la somma delle differenze di potenziale è 0  ", "in un circuito chiuso la somma delle differenze di potenziale è 1", "la corrente entrante in un nodo deve essere equivalente al doppio di quella uscente"],
    },
    269: {
        dom : "cosa dice la seconda legge di kirchhoff?",
        giusto : "in un circuito chiuso la somma delle differenze di potenziale è 0",
        sbagliato : ["la corrente entrante in un nodo deve essere equivalente a quella uscente", "in un circuito chiuso la somma delle differenze di potenziale è 1", "la corrente entrante in un nodo deve essere equivalente al doppio di quella uscente"],
    },
    270: {
        dom : "come si calcola il condensatore equivalente di x condensatori in serie?",
        giusto : "C<sub>eq</sub> = Σ1/Cx",
        sbagliato : ["C<sub>eq</sub> = x/C", "C<sub>eq</sub> = ∏Cx", "C<sub>eq</sub> = ΣCx"],
    },
    271: {
        dom : "come si calcola il condensatore equivalente di x condensatori in parallelo?",
        giusto : "C<sub>eq</sub> = ΣCx",
        sbagliato : ["C<sub>eq</sub> = x/C", "C<sub>eq</sub> = ∏Cx", "C<sub>eq</sub> = ΣCx"],
    },
    272: {
        dom : "come si calcola la carica di un condensatore in un istante t?",
        giusto : "q = q<sub>0</sub> (1 - e <sup>-t/RC</sup>)",
        sbagliato : ["q = q<sub>0</sub> + (1 - e <sup>-t/RC</sup>)", "q = q<sub>0</sub> (1 - e <sup>t/RC</sup>)", "q = q<sub>0</sub> (1 + e <sup>+t/RC</sup>)"],
    },
    273: {
        dom : "come si calcola la corrente in un condensatore in un istante t?",
        giusto : "I = (V<sub>0</sub> / R) * e <sup>-t/RC</sup>",
        sbagliato : ["I = (V<sub>0</sub> / R) * e <sup>t/RC</sup>", "I = V<sub>0</sub> / R * e <sup>-t/RC</sup>", "I = V<sub>0</sub> / R * e <sup>t/RC</sup>"],
    },
    274: {
        dom : "come si calcola la scarica di un condensatore in un istante t?",
        giusto : "q = q<sub>0</sub> e <sup>-t/RC</sup>",
        sbagliato : ["q = q<sub>0</sub> + (1 - e <sup>-t/RC</sup>)", "q = q<sub>0</sub> (1 - e <sup>t/RC</sup>)", "q = q<sub>0</sub> + e <sup>+t/RC</sup>"],
    },
    275: {
        dom : "cosa dice la prima legge di Faraday?",
        giusto : "M = Q m/q",
        sbagliato : ["M = Q m q", "M = Q/mq", "M = m / Qq"],
    },
    276: {
        dom : "come si calcola la Forza di Lorentz?",
        giusto : "F = qv * B * sin0",
        sbagliato : ["F = qv / B * sin0", "F = q / v * B * sin0", "F = q / v * B"],
    },
    277: {
        dom : "come si calcola il campo magnetico?",
        giusto : "B = F / qv * sin0",
        sbagliato : ["B = qv / F * sin0", "B = q / F * v * sin0", "B = q / F * v"],
    },
    278: {
        dom : "come si calcola la velocità se è parallela al campo magnetico?",
        giusto : "v = E / B",
        sbagliato : ["v = E * B", "v = E + B", "v = E - B"],
    },
    279: {
        dom : "come si calcola il raggio se la velocità è perpendicolare al campo magnetico?",
        giusto : "r = mv / qB",
        sbagliato : ["r = mv * qB", "r = mv + qB", "r = mv - qB"],
    },
    280: {
        dom : "come si calcola la forza centrifuga se la velocità è perpendicolare al campo magnetico?",
        giusto : "F<sub>c</sub> = mv<sup>2</sup> / r",
        sbagliato : ["F<sub>c</sub> = mv / r", "F<sub>c</sub> = mv<sup>2</sup> * r", "F<sub>c</sub> = mv * r"],
    },
    281: {
        dom : "come si calcola il passo tra le eliche se la velocità forma un angolo α con il campo magnetico?",
        giusto : "p = 2πm/qB * v cos α",
        sbagliato : ["p = 2πm/qB * v sin α", "p = 2π/qB * v cos α", "p = 2π/qB * v sin α"],
    },
    282: {
        dom : "quanto vale la forza magnetica su un filo percorso da corrente?",
        giusto : "F = I * L * B * sin α",
        sbagliato : ["F = I * L * B * cos α", "F = I * L / B * sin α", "F = I * L / B * cos α"],
    },
    283: {
        dom : "quanto vale il momento torcente di una spira con corrente?",
        giusto : "t = I * A * B * sin α",
        sbagliato : ["F = I * A * B * cos α", "F = I * A / B * sin α", "F = I * A / B * cos α"],
    },
    284: {
        dom : "quanto vale l'intensità del campo magnetico a distanza r?",
        giusto : "B = 4π * 10<sup>-7</sup> * I / 2π * r",
        sbagliato : ["B = 4π * 10<sup>-8</sup> * I / 2π * r", "B = 4π * 10<sup>-7</sup> * I / r", "B = 4π * 10<sup>-8</sup> * I / r"],
    },
    285: {
        dom : "come si calcola il flusso di un campo Magnetico?",
        giusto : "Φ = B * A * cos α",
        sbagliato : ["Φ = B * A * sin α", "Φ = B / A * cos α", "Φ = B / A * sin α"],
    },
}   

//σ ε<sub>0</sub> Φ α λ π <sup></sup> Δ Σ ∏