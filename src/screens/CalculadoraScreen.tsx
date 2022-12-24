import { Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { BotonCalc } from "../components/BotonCalc"
import { useCalculadora } from "../hooks/useCalculadora"


export const CalculadoraScreen = () => {
  const { 
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    del,
    btnDividir,
    armarNumero,
    btnRestar,
    btnSumar,
    calcular, 
    btnMultiplicar 
  } = useCalculadora()

  return (
    <View style={styles.calculadoraContainer} >
      {
        (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequeño} >{numeroAnterior}</Text>
        )
      }
      <Text style=
        {styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      <View style={styles.fila} >
        {/* Button */}

        <BotonCalc text="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" accion={del} />
        <BotonCalc text="/" color="#FF9427" accion={btnDividir} />
      </View>

      <View style={styles.fila} >
        {/* Button */}

        <BotonCalc text="7" accion={armarNumero} />
        <BotonCalc text="8" accion={armarNumero} />
        <BotonCalc text="9" accion={armarNumero} />
        <BotonCalc text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila} >
        {/* Button */}

        <BotonCalc text="4" accion={armarNumero} />
        <BotonCalc text="5" accion={armarNumero} />
        <BotonCalc text="6" accion={armarNumero} />
        <BotonCalc text="-" color="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila} >
        {/* Button */}

        <BotonCalc text="1" accion={armarNumero} />
        <BotonCalc text="2" accion={armarNumero} />
        <BotonCalc text="3" accion={armarNumero} />
        <BotonCalc text="+" color="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila} >
        {/* Button */}

        <BotonCalc text="0" ancho accion={armarNumero} />
        <BotonCalc text="." accion={armarNumero} />
        <BotonCalc text="=" color="#FF9427" accion={calcular} />
      </View>

    </View>
  )
}
