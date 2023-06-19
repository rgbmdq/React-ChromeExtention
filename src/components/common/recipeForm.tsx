import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Dish } from 'helpers/types'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  origin: Yup.string().required('Origin is required').max(2, 'Origin must not exceed 2 characters'),
  description: Yup.string().required('Description is required').max(200, 'Description must not exceed 200 characters'),
  difficulty: Yup.string().required('Difficulty is required'),
  protein: Yup.string().required('Protein is required'),
  produce: Yup.string().required('Produce is required'),
  spice: Yup.string().required('Spice is required'),
  cookingOil: Yup.string().required('Cooking Oil is required'),
  volume: Yup.number().required('Volume is required').positive('Volume must be a positive number'),
  serves: Yup.number().required('Serves is required').positive('Serves must be a positive number'),
  authenticity: Yup.string().required('Authenticity is required'),
  stock: Yup.string().required('stock are required'),
})
const initialValues = {
  name: '1test',
  origin: 'as',
  description: 'test',
  difficulty: 1,
  protein: 'test',
  produce: 'test',
  spice: 'test',
  cookingOil: 'test',
  volume: 2,
  serves: 2,
  authenticity: 'Verified',
  stock: 'test',
}

const RecipeForm = ({ handleSubmit }: { handleSubmit: (values: Dish) => void }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validationSchema}
      >
        {() => (
          <Form
            style={{
              color: 'white',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              margin: '10px 24px 0px 24px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='name'>
                Name
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='name' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='origin'>
                Origin
              </label>
              <Field
                type='text'
                id='origin'
                name='origin'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='origin' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '98%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='description'>
                Description
              </label>
              <Field
                as='textarea'
                id='description'
                name='description'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '72px',
                }}
              />
              <ErrorMessage name='description' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='difficulty'>
                Difficulty
              </label>
              <Field
                as='select'
                id='difficulty'
                name='difficulty'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              >
                <option value='1'>Easy</option>
                <option value='2'>Medium</option>
                <option value='3'>Hard</option>
              </Field>
              <ErrorMessage name='difficulty' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='protein'>
                Protein
              </label>
              <Field
                type='text'
                id='protein'
                name='protein'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='protein' component='div' className='Error' />
            </div>{' '}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='produce'>
                Produce
              </label>
              <Field
                type='text'
                id='produce'
                name='produce'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='produce' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='spice'>
                Spice
              </label>
              <Field
                type='text'
                id='spice'
                name='spice'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='spice' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='cookingOil'>
                Cooking Oil
              </label>
              <Field
                type='text'
                id='cookingOil'
                name='cookingOil'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='cookingOil' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='volume'>
                Volume
              </label>
              <Field
                type='number'
                id='volume'
                name='volume'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='volume' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='serves'>
                Serves
              </label>
              <Field
                type='number'
                id='serves'
                name='serves'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              />
              <ErrorMessage name='serves' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='authenticity'>
              Authenticity
              </label>
              <Field
                as='select'
                id='authenticity'
                name='authenticity'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '36px',
                }}
              >
                <option value='Verified'>Verified</option>
                <option value='Unverified'>Unverified</option>
              </Field>
              <ErrorMessage name='authenticity' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '98%',
              }}
            >
              <label style={{ marginBottom: '4px' }} htmlFor='stock'>
                Stock
              </label>
              <Field
                as='textarea'
                id='stock'
                name='stock'
                required
                style={{
                  background: '#181F30',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  border: '1px solid #5B6178',
                  paddingLeft: '6px',
                  color: '#E9EAF6',
                  height: '72px',
                }}
              />
              <ErrorMessage name='instructions' component='div' className='Error' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '98%',
              }}
            >
              <button
                type='submit'
                style={{
                  background: '#764AF4',
                  borderStyle: 'none',
                  borderRadius: '6px',
                  color: '#E9EAF6',
                  padding: '10px 20px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
              >
                Add Recipe
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RecipeForm
