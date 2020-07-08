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

# Regeln

1. Mit einer geraden Linie starten
2. Linie in drei Teile aufteilen
3. Den mittleren Teil der Linie "radieren"
4. Den mittleren Teil zu einem gleichseitigen Dreieck verbinden
5. Mit allen neuen Linien wiederholen

Zur Verständlichkeit ein Bild.

# Simulation

-   Ggf Splitscreen mit Regeln
-   Generationen darstellen (0..9)

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
-   Interessant: Während die gesamte Länge der Koch-Kurve ins Unendliche geht, geht die Länge der Linien zu 0

.. Umfang ist in dieser Form etwas speziell, da es ja nicht geschlossen ist => Schneeflocke

# Summenzeichen

-   Im Nachfolgenden wird das Summenzeichen gebraucht, deshalb kurze Einführung
-   Unten wird x einem Startwert zugewiesen, oben Endwert
-   $x^2$ wird mit jedem Wert ausgerechnet und addiert => 55

# Fläche der Koch-Kurve

-

# Koch Schneeflocke

-   Wenn man statt einer anfänglichen Gerade drei Geraden nimmt, kann man daraus ein Dreieck formen
-   Dieses Dreieck hat für jede Seite die selben Regeln wie bei der Linie
-   Der Umfang ist somit $$P_n = 3 \cdot s\cdot\left(\frac{4}{3}\right)^n$$
