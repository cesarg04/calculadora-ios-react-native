import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('');
    const [numeroAnterior, setAumeroAnterior] = useState('0')

    const limpiar = () => {
        setNumero('0');
        setAumeroAnterior('0')
    }

    const ultimaOperacion = useRef<Operadores>()

    const del = () => {

        let negativo = '';
        let numeroTemp = numero

        if (numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0')
        }

    }

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;


        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }



        } else {
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }


    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)

                break;

            case Operadores.restar:
                console.log('restar');
                setNumero(`${num2 - num1}`)
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`)

        }

        setAumeroAnterior('0')

    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setAumeroAnterior(numero.slice(0, -1))
        } else {
            setAumeroAnterior(numero);
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    return{
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
    }

}
