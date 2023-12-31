const korisniciDAO = require("./DAO/korisniciDAO");

exports.prijava = function (zahtjev, odgovor) {
    const kdao = new korisniciDAO();
    let korisnik = zahtjev.body;
    if(!korisnik || !korisnik.KorisnickoIme || !korisnik.Lozinka) odgovor.status(400).json({error:"Nisu poslani podaci"});
    else {
        try {
            kdao.prijava(korisnik).then((poruka) => {
                if(poruka.error) {
                    odgovor.status(400).json({error:poruka.error})
                }
                else {
                    odgovor.status(200).json({ token: poruka.token, kosarica: poruka.kosarica });
                }
            });
        } catch (serverError) {
            odgovor.status(500).json({error:serverError})
        }
    }
    
}

exports.registracija = function (zahtjev, odgovor) {
    const kdao = new korisniciDAO();
    let korisnik = zahtjev.body;
    if(!korisnik || !korisnik.KorisnickoIme || !korisnik.Lozinka) odgovor.status(400).json({error:"Nisu poslani podaci"});
    else {
        try {
            kdao.registracija(korisnik).then((poruka) => {
                if(poruka.error) {
                    odgovor.status(400).json({error:poruka.error})
                }
                else {
                    odgovor.sendStatus(200);
                }
            });
        } catch (serverError) {
            odgovor.status(500).json({error:serverError})
        }
    }
 
}

exports.korisnik = function (zahtjev, odgovor) {}