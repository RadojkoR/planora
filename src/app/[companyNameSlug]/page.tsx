// import { getUser } from "@/lib/users";



export default async function CompanyDetailsPage() {
  //  const user = await getUser(params.companyNameSlug)
  //  if (!user) {
  //    return (
  //      <main className="mainContainer flex-grow">
  //        <section>
  //          <h1 className="text-3xl text-center text-red-600">
  //            Firma nije pronađena.
  //          </h1>
  //        </section>
  //      </main>
  //    );
  //  }
  return (
    <main className="mainContainer flex-grow">
      <section>
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Dobro dosli na profil stranu
        </h1>
      </section>
      <section className="max-w-2xl mx-auto text-center text-gray-600 mt-4">
        <p>
          Ova stranica predstavlja početnu tačku za podešavanje profila vaše
          firme. Ovde možete uneti osnovne informacije kao što su logo, adresa,
          PIB, broj telefona i druge detalje koji će biti prikazani u ponudama i
          u vašem korisničkom interfejsu.
        </p>
        <p className="mt-2">
          Kada završite sa unosom informacija, vaš dashboard će biti kompletno
          personalizovan i spreman za korišćenje.
        </p>
      </section>
      <form  className="space-y-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Naziv firme
          </label>
          <input
            type="text"
            name="company_name"
            className="w-full mt-1 border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Adresa firme
          </label>
          <input
            type="text"
            name="company_address"
            placeholder="Unesite adresu"
            className="w-full mt-1 border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            PIB / Matični broj
          </label>
          <input
            type="text"
            name="company_tax_id"
            placeholder="Unesite PIB"
            className="w-full mt-1 border px-3 py-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sačuvaj izmene
        </button>
      </form>
    </main>
  );
}