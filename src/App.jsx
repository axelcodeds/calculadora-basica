import { useState, useEffect } from 'react'

import './App.css'

function App() {
    const [numero1, setNumero1] = useState('0')
    const [numero2, setNumero2] = useState('0')
    const [operacion, setOperacion] = useState('')
    const [status, setStatus] = useState('operacion')

    useEffect(() => {
        const redondearNumeros = (numero, setNumero) => {
            if (numero.toString().length > 8) {
                setNumero(numero.toString().slice(0, 8))
            }
        }
        redondearNumeros(numero1, setNumero1)
        redondearNumeros(numero2, setNumero2)
    }, [numero1, numero2])

    const updateNumero = numero => {
        if (status === 'resultado') {
            resetNumeros()
            setNumero1(numero)
            setStatus('operacion')
        } else {
            const nuevoNumero =
                operacion.length === 0 ? numero1 + numero : numero2 + numero
            if (operacion.length === 0) {
                setNumero1(parseFloat(nuevoNumero).toString())
            } else {
                setNumero2(parseFloat(nuevoNumero).toString())
            }
        }
    }

    const updateResultado = () => {
        setNumero1(numero1 + ' ' + operacion + ' ' + numero2)
        switch (operacion) {
            case '+':
                setNumero2(parseFloat(numero1) + parseFloat(numero2))
                break
            case '-':
                setNumero2(parseFloat(numero1) - parseFloat(numero2))
                break
            case 'x':
                setNumero2(parseFloat(numero1) * parseFloat(numero2))
                break
            case '/':
                setNumero2(parseFloat(numero1) / parseFloat(numero2))
                break
            case '%':
                setNumero2(parseFloat(numero1) % parseFloat(numero2))
                break
            default:
                setNumero2('Error')
                break
        }
        setStatus('resultado')
    }

    const updateResultadoEspecial = operacionEspecial => {
        let resultado
        switch (operacionEspecial) {
            case 'sqr':
                resultado = parseFloat(numero1) ** 2
                break
            case 'cbr':
                resultado = parseFloat(numero1) ** 3
                break
            case 'sqrt':
                resultado = Math.sqrt(parseFloat(numero1))
                break
            default:
                resultado = 'Error'
                break
        }
        setOperacion(operacionEspecial)
        setNumero1(operacionEspecial + '(' + numero1 + ')')
        setNumero2(resultado)
        setStatus('resultado')
    }

    const resetNumeros = () => {
        setNumero1('0')
        setNumero2('0')
        setOperacion('')
    }

    const resetNumero = () => {
        if (operacion === '') {
            setNumero1('0')
        } else {
            setNumero2('0')
        }
    }

    const backspace = () => {
        if (operacion === '') {
            if (numero1.length === 1) {
                setNumero1('0')
            } else {
                setNumero1(numero1.slice(0, -1))
            }
        } else {
            if (numero2.length === 1) {
                setNumero2('0')
            } else {
                setNumero2(numero2.slice(0, -1))
            }
        }
    }

    return (
        <div className='container'>
            <h1 className='titulo'>Calculadora Básica</h1>
            <div className='calculadora'>
                <div className='pantalla'>
                    <div className='pantalla-vista'>
                        <span className='numero1'>
                            {operacion.length !== 0 && numero1}
                        </span>
                        <span className='numero2'>
                            {operacion.length === 0 ? numero1 : numero2}
                        </span>
                    </div>
                </div>
                <div className='teclado'>
                    <div onClick={() => setOperacion('%')} className='tecla'>
                        %
                    </div>
                    <div onClick={() => resetNumeros()} className='tecla'>
                        CE
                    </div>
                    <div onClick={() => resetNumero()} className='tecla'>
                        C
                    </div>
                    <div onClick={() => backspace()} className='tecla'>
                        ⌫
                    </div>
                    <div
                        onClick={() => updateResultadoEspecial('cbr')}
                        className='tecla'
                    >
                        x³
                    </div>
                    <div
                        onClick={() => updateResultadoEspecial('sqr')}
                        className='tecla'
                    >
                        x²
                    </div>
                    <div
                        onClick={() => updateResultadoEspecial('sqrt')}
                        className='tecla'
                    >
                        √
                    </div>
                    <div onClick={() => setOperacion('/')} className='tecla'>
                        /
                    </div>
                    <div onClick={() => updateNumero('7')} className='tecla'>
                        7
                    </div>
                    <div onClick={() => updateNumero('8')} className='tecla'>
                        8
                    </div>
                    <div onClick={() => updateNumero('9')} className='tecla'>
                        9
                    </div>
                    <div onClick={() => setOperacion('x')} className='tecla'>
                        x
                    </div>
                    <div onClick={() => updateNumero('4')} className='tecla'>
                        4
                    </div>
                    <div onClick={() => updateNumero('5')} className='tecla'>
                        5
                    </div>
                    <div onClick={() => updateNumero('6')} className='tecla'>
                        6
                    </div>
                    <div onClick={() => setOperacion('-')} className='tecla'>
                        -
                    </div>
                    <div onClick={() => updateNumero('1')} className='tecla'>
                        1
                    </div>
                    <div onClick={() => updateNumero('2')} className='tecla'>
                        2
                    </div>
                    <div onClick={() => updateNumero('3')} className='tecla'>
                        3
                    </div>
                    <div onClick={() => setOperacion('+')} className='tecla'>
                        +
                    </div>
                    <div onClick={() => updateNumero('00')} className='tecla'>
                        00
                    </div>
                    <div onClick={() => updateNumero('0')} className='tecla'>
                        0
                    </div>
                    <div className='tecla'>.</div>
                    <div onClick={() => updateResultado()} className='tecla'>
                        =
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
