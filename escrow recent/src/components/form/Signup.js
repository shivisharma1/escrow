import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import Web3 from 'web3';
import abiArray from '../../abi/escrowabi.json'
import busdAbiArray from '../../abi/busdabi.json'

export const Signup = () => {
  var contractAddress = "0x302E855d01cC6a20F202b8DdB4878F85742E3e05";
  var contractAddress1 = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";
  const web3 = new Web3(window.ethereum);

  var myContract1 = new web3.eth.Contract(busdAbiArray, contractAddress1, {
    from: '0x3721430091076C0be6e96CE17E7DC22A2e173b57', // default from address
  });
  console.log(myContract1);

  var myContract = new web3.eth.Contract(abiArray, contractAddress, {
    from: '0x3721430091076C0be6e96CE17E7DC22A2e173b57', // default from address
  });
  console.log(myContract);

   // Read Contract Information - Contract Owner
   myContract.methods.contractOwner().call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'})
  .then(console.log)
  

  async function createDeal(amount){
    const accounts = await web3.eth.getAccounts();
    //using the callback
    /* myContract.methods.createDeal('0x91ca770c261772DDAaFc2FA477527C5191f5Be53').send({from: accounts[0]}, function(error, transactionHash){
      console.log(transactionHash);
    });  */
    myContract1.methods.transfer('0x91ca770c261772DDAaFc2FA477527C5191f5Be53',amount).estimateGas({from: accounts[0]})
    .then(function(gasAmount){
        console.log(gasAmount);
    })
    .catch(function(error){
        
    });

    myContract1.methods.transfer('0x91ca770c261772DDAaFc2FA477527C5191f5Be53',amount).send({from: accounts[0]}, function(error, transactionHash){
      console.log(transactionHash);
    });
  }
  
  const validate = Yup.object({
    title: Yup.string('Provide A Title')
      .required('Required!!'),
    description: Yup.string()
      .required('Required!!'),
    amount: Yup.number()
      .min(50,'Can not send anything less than 50 USDT!')
      .required('Required!!'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
  })

  /* const validateTermsAndConditions = Yup.object().shape({

    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
  }) */

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        amount: '',
        acceptTerms: false
      }}
      validationSchema={validate}
      onSubmit={(val) => createDeal(val.amount)}
    >
      {props => (
      /* {({ errors, touched }) => ( */
        <div>
          <h1 className="my-4 font-weight-bold .display-4">NEW PAYMENT</h1>
          <Form>
            <TextField label="Title*" name="title" type="text" onChange={props.handleChange} value={props.values.title}/>
            <TextField label="Description*" name="description" type="text" onChange={props.handleChange} value={props.values.description} />
            <TextField label="Amount BUSD*" name="amount" type="number" onChange={props.handleChange} value={props.values.amount}/>
            <div className="form-group form-check">
              <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (props.errors.acceptTerms && props.touched.acceptTerms ? ' is-invalid' : '')} />
              <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
              <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
            </div>
            <button /* onClick={() => createDeal()} */ className="btn btn-success m-4  btn-lg" type="submit">Create New Deal</button>
            <button className="btn btn-danger m-4  btn-lg" type="reset">Reset Values</button>
          </Form>
        </div>
      /* )} */
      )}
    </Formik>
  )
}
