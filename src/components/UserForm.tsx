import {Box} from '@material-ui/core';
import React, {useState} from 'react';
import {Field, Form as FinalForm} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {
  Center,
  Column,
  Input,
  Form,
  StyledFormControl,
  StyledTypography,
  Select,
  Button,
  Notification
} from '../@UI';
import {INotification} from '../@UI/Notification';
import {Colors} from '../GlobalStyle';
import {composeValidators, number, required} from '../lib/validators';
import {setLoading} from '../reducers/ui';
import {setUser, User} from '../reducers/user';

const {background} = Colors;

export const UserForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [notification, setNotification] = useState<INotification>();

  const onSubmit = (data: User): void => {
    try {
      dispatch(setLoading(true));
      dispatch(setUser(data));
      setNotification({
        open: true,
        message: 'Success!',
        severity: 'success',
        horizontal: 'right',
        slide: 'up'
      });
      setTimeout(() => history.replace('/game'), 3500);
    } catch (error) {
      throw new Error(error);
    } finally {
      setTimeout(() => dispatch(setLoading(false)), 3500);
    }
  };

  return (
    <Center>
      <StyledUserForm>
        <StyledTypography variant={'h2'} component={'h2'} color={'secondary'}>
          Please fill out the form
        </StyledTypography>
        <FinalForm onSubmit={onSubmit} initialValues={{gender: options[0]}}>
          {({handleSubmit, submitting, pristine}) => (
            <Form width={'400px'} onSubmit={handleSubmit}>
              <Box width={1}>
                <StyledFormControl>
                  <Field
                    name="name"
                    label={'name'}
                    component={Input}
                    validate={composeValidators(required)}
                  />
                </StyledFormControl>
              </Box>
              <Box width={1}>
                <StyledFormControl>
                  <Field
                    name="age"
                    label={'age'}
                    component={Input}
                    validate={composeValidators(required, number)}
                  />
                </StyledFormControl>
              </Box>
              <Box width={1}>
                <StyledFormControl>
                  <Field name="gender" label={'gender'} component={Select} options={options} />
                </StyledFormControl>
              </Box>
              <Box width={1} mt={'0.7em'}>
                <Button type="submit" width={'100%'} disabled={submitting || pristine}>
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </FinalForm>
      </StyledUserForm>
      <Notification {...notification} onClose={() => setNotification({open: false})} />
    </Center>
  );
};

export const StyledUserForm = styled(Column)`
  padding: 1em;
  margin: 1em auto;
  background-color: ${background};
  border-radius: 14px;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.3);
`;

export const options = [
  {value: 'male', label: 'male'},
  {value: 'female', label: 'female'}
];
