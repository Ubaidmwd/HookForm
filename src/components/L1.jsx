import React from 'react'
import Button from '@mui/material/Button';
import { Container, width } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from "@mui/material/OutlinedInput";


const L1 = () => {

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

            <br /><br />

            <div>
              <TextField
                label="Email" variant="outlined"

                {...register('Email', { required: true })}


              />
            </div>
            <br /><br />

            <div>

              <TextField
                label="Password"
                variant="outlined"
                {...register('Password', { required: true })}


              />
            </div>
            <div>
              <br /><br />

              <TextField
                label="City"
                variant="outlined"
                {...register('Address.city', { required: true })}


              />
            </div>
            <div>
              <br /><br />

              <TextField
                label="ZipCode"
                variant="outlined"
                {...register('Address.zipcode', { required: true })}


              />
            </div>
            <br /><br />
            <div>
              <FormControl fullWidth>

                {/* <InputLabel variant='outline' >Age</InputLabel> */}
                <InputLabel variant="outlined" >
                  Age
                </InputLabel>
                
                <NativeSelect
                  defaultValue={0}
                  input={<OutlinedInput label="Age" />}
                  inputProps={{
                    ...register('age', { required: true }),

                    id: 'uncontrolled-native'
                  }}
                >
                  <option value={0} >Select Your Age</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </div>
            <br /><br />

            <Button variant="contained" type='submit' >Submit</Button>
          </form>
        </div>
        <br /><br />



      </Container>


    </div>
  )
}

export default L1