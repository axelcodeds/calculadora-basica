import { useState } from 'react'

import './App.css'

function App() {
    const [numero1, setNumero1] = useState('0')
    const [numero2, setNumero2] = useState('0')
    const [operacion, setOperacion] = useState('')
    const [status, setStatus] = useState('operacion')

    const updateNumero = numero => {
        if (status === 'resultado') {
            setStatus('operacion')
            resetNumeros()

            setNumero1(numero)
        } else if (operacion.length === 0) {
            if (numero1 === '0') {
                setNumero1(numero)
            } else {
                setNumero1(numero1 + numero)
            }
        } else {
            if (numero2 === '0') {
                setNumero2(numero)
            } else {
                setNumero2(numero2 + numero)
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
                    <div className='tecla'>x³</div>
                    <div className='tecla'>x²</div>
                    <div className='tecla'>√</div>
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
