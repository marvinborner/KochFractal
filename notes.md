# Fraktale

Stark vereinfacht!

-   Selbstähnlichkeit
    -   Bei unendlicher Vergrößerung des untersuchten Objekts wird immer wieder die ursprüngliche Struktur erhalten (Wiederholung)
    -   Praktisch nur mathematisch möglich: Beispiel Mandelbrot
    -   Annäherungen auch in der Natur: Beispiel bestimmte Blume, Gemüse
-   Beispiel Romanesco Pflanze (Blumenkohl-Sorte)
-   Beispiel Sierpinski Dreieck
    -   Das Muster wiederholt sich bis ins Unendliche
-   Das Koch Fraktal ist dem allen sehr ähnlich, wie wir bald feststellen werden

# Koch-Regeln - das Koch-Rezept :)

1. Mit einer geraden Linie starten
2. Linie in drei Teile aufteilen
3. Den mittleren Teil der Linie "radieren"
4. Den mittleren Teil zu einem gleichseitigen Dreieck verbinden
5. Mit allen neuen Linien wiederholen

Zur Verständlichkeit ein Bild.

# Simulation

-   Ggf Splitscreen mit Regeln
-   Generationen darstellen (0..9)
-   **Bei der Koch-Kurve wird immer von der unendlichen Generation/Iteration ausgegangen!**

# Selbstähnlichkeit

-   Bei unendlicher Vergrößerung der Koch-Kurve wiederholt sich immer die selbe Struktur => selbstähnlich => Fraktal
-   Spannend: Gute Darstellung von der Unendlichkeit
-   Bisschen hypnotisieren(d)

# Umfang des Koch Fraktals

-   SPLIT-SCREEN!
-   Umfang ist Anzahl der Linien \* Länge der Linien; weil alle Linien gleich lang sind (darstellen?)
-   n ist die "Generation"

### Anzahl der Linien

-   Die Anzahl der Linien vervierfacht sich bei jeder Generation => folglich: $$4^n$$

### Länge der Linien

-   Die Länge der Linien wird bei jeder Generation /3 geteilt
-   Bei Anfangslänge von s ergibt sich $$\frac{s}{3^n}$$
-   Länge jeder Linien geht Richtung 0 bei n gegen unendlich

### Nebenrechnung

-   Wie gesagt, Umfang ist Anzahl \* Länge der Linien
-   Mit beiden Variablen ergibt sich $$P_n = N_n\cdot S_n = s\cdot\left(\frac{4}{3}\right)^n$$

### Umfang

-   Sprich: Die Kurvenlänge wird in jedem Iterationsschritt n um (4/3)^n größer
-   Der Umfang bzw. Länge der Koch Kurve ist somit das Berechnete

### Grenzwert

-   Der Grenzwert des Umfangs ins Unendliche geht gegen unendlich, da $\frac{4}{3}$ größer als 1 ist
-   Interessant: Während die gesamte Länge der Koch-Kurve ins Unendliche geht, geht die Länge der einzelnen Linien zu 0

.. Umfang ist in dieser Form etwas speziell, da es ja nicht geschlossen ist => Schneeflocke später

# Summenzeichen

-   Im Nachfolgenden wird das Summenzeichen gebraucht, deshalb kurze Einführung
-   Unten wird x einem Startwert zugewiesen, oben Endwert
-   $x^2$ wird mit jedem Wert ausgerechnet und addiert => 55

# Fläche der Koch-Kurve

Monocle/Split-screen mit Simulation

-   Wie viele Dreiecke ("#1") passen in das große Dreieck ("#0")? => 9 ("#2")
-   Bei der zweiten Generation kommen an den 4 Linien Dreiecke mit 1/9 Flächeninhalt hinzu

Generalisierung (klick)

-   Bei vorheriger Gleichung für Anzahl der Linien: $4^n$
-   Dreiecksfläche der derzeitigen Generation
-   => Die Anzahl der Linien der vorherigen Generation mit der Fläche der Dreiecke multiplizieren
-   In jeder Generation kommt $4^{n-1} \cdot (1/9)^{n - 1}$ Fläche dazu

Klick

-   Darstellung: Fläche zum Zeitpunkt n ist die Summe aller Flächen-Differenzen

Durch Limes ins Unendliche kann die Fläche berechnet werden

-   Geometrische Reihe => **1,8**
-   => Bestimmte Fläche, unendlicher Umfang/Länge

# Koch Schneeflocke

-   Wenn man statt einer anfänglichen Gerade drei Geraden nimmt, kann man daraus ein Dreieck formen
-   Dieses Dreieck hat für jede Seite die selben Regeln wie bei der Linie
-   Der Umfang ist somit dreimal so groß
-   Fläche: An jeder Seite wie berechnet + mittleres Dreieck

# Differenzierbarkeit

-   Eine Funktion ist differenzierbar, wenn man eine Tangente konstruieren kann
-   Die Koch-Kurve hat keine Geraden und besteht im Unendlichen nur aus Winkeln
-   => Nicht differenzierbar

# Stetigkeit (vielleicht auslassen)

Nicht stetig:

-   Definitionslücken
-   Sprünge in der Funktion

Stetig:

-   Umgangssprachlich: Sind ohne Abheben zeichenbar (stark vereinfacht)
-   Sinus, Parabel, ... => Alle normalen Funktionen
-   => Die Koch-Kurve ist stetig
