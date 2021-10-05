const TYPE = 1 // 1: Excel, 2: JSON, 3: CSV
const PERCHUNK = 100
const SOURCEFILE = "input/convert.xlsx"
const DESTINATIONPATH = "output/"
const DESTINATIONFILE = "alumnos"
const NOMBREDELAHOJA = "Hoja1"

const EXCELCOLUMNKEYS = {
  "A": "matricula",
  "B": "mail",
  "C": "nombre",
  "D": "ap_paterno",
  "E": "ap_materno",
  "F": "telefono",
  "G": "sexo",
  "H": "fecha_nacimiento",
  "I": "CURP",
  "J": "folio_ceneval",
  "K": "estatus",
  "L": "fecha_egreso",
  "M": "escuela_procedencia",
  "N": "calle",
  "O": "colonia",
  "P": "numero_interior",
  "Q": "numero_exterior",
  "R": "municipio",
  "S": "estado",
  "T": "codigo_postal",
  "U": "nivel",
  "V": "grado",
  "W": "carrera",
  "X": "turno",
  "Y": "plan_estudio",
  "Z": "situacion",
  "AA": "tipo_situacion",
  "AB": "estado_nacimiento",
  "AC": "municipio_nacimiento",
  "AD": "estado_escuela",
  "AE": "municipio_escuela",
  "AF": "promedio",
  "AG": "folio_registro",
  "AH": "pago_referenciado",
  "AI": "nacionalidad",
  "AJ": "numero_seguro",
  "AK": "generacion",
  "AL": "tiene_hijos",
  "AM": "hijos_h",
  "AN": "hijos_m",
  "AO": "carrera_cursada"
}

export { TYPE, PERCHUNK, DESTINATIONPATH, DESTINATIONFILE, SOURCEFILE, NOMBREDELAHOJA, EXCELCOLUMNKEYS }