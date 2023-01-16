import React from 'react'
import Button from '@mui/material/Button';
import { Container, width } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'
// import { Form } from '@mui/material';

const App = () => {

  const { register, handleSubmit, errors } = useForm();
  // const ref=register

  const submit = (data) => {
    console.log(data)
  }



  return (
    <div>
      <Container sx={{ width: "400px", borderRadius: "20px" }} >
        <div className="form" >
          <form onSubmit={handleSubmit(submit)} >
            <div>

              <TextField
                label="UserName"
                variant="outlined"
                {...register('UserName', { required: true })}
                
              />
            </div>

            <br /><br /><br />

            <div>
              <TextField
                label="Email" variant="outlined"

                {...register('Email', { required: true })}

               
              />
            </div>
            <br /><br /><br />

            <div>

              <TextField
                label="Password"
                variant="outlined"
                {...register('Password', { required: true })}

                
              />
            </div>
            <div>
              <br /><br /><br />

              <TextField
                label="Address"
                variant="outlined"
                {...register('Address', { required: true })}

                
              />
            </div>
            <br /><br /><br />


            <Button variant="contained" type='submit' >Submit</Button>
          </form>
        </div>
        <br /><br /><br />


      </Container>


    </div>
  )
}

export default App