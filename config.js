const TYPE = 1 // 1: Excel, 2: JSON, 3: CSV
const PERCHUNK = 500
const DESTINATIONPATH = "C:/wututrm/"
const DESTINATIONFILE = "asignaturasnuevo"
const SOURCEFILE = "convert/convert.xlsx"
const NOMBREDELAHOJA = "Hoja1"

const EXCELCOLUMNKEYS = {
  "A": "nombre_carrera",
  "B": "nombre_programa",
  "C": "cuatrimestre",
  "D": "nombre_materia",
  "E": "nombre_corto_materia",
  "F": "nombreTitulo_materia",
  "G": "Clave_materia",
  "H": "horaPractica",
  "I": "horaTeoricas",
  "J": "horaSemana",
  "K": "hora_total",
  "L": "tipo_carrera",
  "M": "estatus_materia",
  "N": "objetivo",
  "O": "competencias",
  "P": "fecha_creacion",
  "Q": "modelo_educativo"
}

export { TYPE, PERCHUNK, DESTINATIONPATH, DESTINATIONFILE, SOURCEFILE, NOMBREDELAHOJA, EXCELCOLUMNKEYS }