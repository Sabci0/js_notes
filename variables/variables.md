# Variables

## Different keywords
- var (nie powinno się uzywac, tylko jak potrzebujesz zasięg funkcyjny)
- let (zmienna)
- const (stała - domslnie ta należy uzywać)

---

|             x | var | let | const |
|--------------:| :---: | :---: | :---: | 
| redeclaration | ok (quirks mode) | no | no |
| reinitialization | ok | no | no |
| scope | function | block | block |
| hoisting | ok | ok(TDZ) | ok (TDZ) |
