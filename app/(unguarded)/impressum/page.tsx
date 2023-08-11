import Container from '@/components/Container';

export default function impressum() {
  return (
    <Container>
      <section className='mb-12'>
        <h2 className='mb-4'>
          <span className='font-bold'>Impressum:</span> Angaben gemäß § 5 TMG
        </h2>
        <p>
          Unguarded, Hülsenbeck und Roth GbR
          <br />
          c/o Philipp Hülsenbeck
          <br />
          Potsdamer Straße 116
          <br />
          10785 Berlin
          <br />
          Germany
          <br />
          Email: info@unguarded.eu
          <br />
          Phone: +49 176 40439802
        </p>
      </section>

      <section className='mb-20'>
        <h2 className='font-bold mb-4'>Haftung für Inhalte</h2>
        <p className='mb-6'>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h2 className='font-bold mb-4'>Haftung für Inhalte</h2>
        <p className='mb-6'>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </section>
    </Container>
  );
}
