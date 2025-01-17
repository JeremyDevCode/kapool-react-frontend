import { type IInputsProps, type ICheckboxProps } from '../../interfaces'
import { Input } from '../UI'

interface Props {
  onChangeData: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputsValue: IInputsProps
  checkboxAnswers: ICheckboxProps
}

export const SectionAnswers = ({ onChangeData, onChangeCheckbox, inputsValue, checkboxAnswers }: Props) => {
  return (
        <>
          <h2 className='text-white text-2xl mt-8'
          >Coloca tus 4 posibles respuestas
          </h2>
          <p className='text-zinc-500'>La respuesta correcta debe ser marcada en la casilla</p>

          <div className="w-7/12 grid grid-cols-2 gap-7 mt-7">

            <div className="flex items-center">
              <Input
                type="text"
                name='answer1'
                onChange={onChangeData}
                value={
                  inputsValue.answer1
                }
                className='outline-0 shadow w-full bg-zinc-800 h-10 rounded placeholder:text-zinc-500 pl-4 text-zinc-500 focus:shadow-zinc-500 ease-in duration-100'
                placeholder='Escribe la posible respuesta...'
              />
              <Input
                type="checkbox"
                name='answer1'
                onChange={onChangeCheckbox}
                checked={checkboxAnswers.answer1}
                value={
                  inputsValue.answer1
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                />
            </div>

            <div className="flex items-center">
              <Input
                type="text"
                name='answer2'
                onChange={onChangeData}
                value={
                  inputsValue.answer2
                }
                className='outline-0 shadow w-full bg-zinc-800 h-10 rounded placeholder:text-zinc-500 pl-4 text-zinc-500 focus:shadow-zinc-500 ease-in duration-100'
                placeholder='Escribe la posible respuesta...'
              />
              <Input
                type="checkbox"
                name='answer2'
                onChange={onChangeCheckbox}
                checked={checkboxAnswers.answer2}
                value={
                  inputsValue.answer2
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                />
            </div>

            <div className="flex items-center">
              <Input
                type="text"
                name='answer3'
                onChange={onChangeData}
                value={
                  inputsValue.answer3
                }
                className='outline-0 shadow w-full bg-zinc-800 h-10 rounded placeholder:text-zinc-500 pl-4 text-zinc-500 focus:shadow-zinc-500 ease-in duration-100'
                placeholder='Escribe la posible respuesta...'
              />

              <Input
                type="checkbox"
                name='answer3'
                onChange={onChangeCheckbox}
                checked={checkboxAnswers.answer3}
                value={
                  inputsValue.answer3
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                />
            </div>

            <div className="flex items-center">
              <Input
                type="text"
                name='answer4'
                onChange={onChangeData}
                value={
                  inputsValue.answer4
                }
                className='outline-0 shadow w-full bg-zinc-800 h-10 rounded placeholder:text-zinc-500 pl-4 text-zinc-500 focus:shadow-zinc-500 ease-in duration-100'
                placeholder='Escribe la posible respuesta...'
              />
              <Input
                type="checkbox"
                name='answer4'
                onChange={onChangeCheckbox}
                checked={checkboxAnswers.answer4}
                value={
                  inputsValue.answer4
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-1"
                />
            </div>
          </div>
        </>
  )
}
