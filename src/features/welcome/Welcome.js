import React, { Fragment,useState,useCallback } from 'react';
import { Typography, Grid, InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { CustomTextField, IconButton } from '@bit/totalsoft_oss.react-mui.kit.core';
import KeyboardReturnIcon  from '@material-ui/icons/KeyboardReturn';
import { emptyString } from 'utils/constants';
import { validateEmail } from 'utils/functions';
import { useEmail } from 'hooks/useEmail';

function Welcome() {
  
  const { t } = useTranslation()
  const [email, setEmail] = useEmail()
  const [isInputValid, setIsInputValid] = useState(true)

  const [textFieldValue, setTextFieldValue] = useState(email)
  const handleTextFieldValue = useCallback(event => setTextFieldValue(event.target.value),[])
  const handleButtonClick  = useCallback(() => {
    
  const isValid = validateEmail(textFieldValue)
  setEmail(isValid ? textFieldValue : emptyString)
  setIsInputValid(isValid)
  }, [textFieldValue, setEmail])
  const handleKeyDown = useCallback(e => e.keyCode === 13 && handleButtonClick(), [handleButtonClick])

  return (
    <Fragment>
      <Grid container direction='column' alignItems='center' spacing={10}>
        <Grid item>
          <Typography variant="h3">{t("LandingPage.Title")}</Typography>
        </Grid>  
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item>
            <Typography variant="caption">{t("LandingPage.SubTitle")}</Typography>
          </Grid>
          <Grid item>
            <CustomTextField 
              value={textFieldValue}
              onChange={handleTextFieldValue}
              onKeyDown={handleKeyDown}
              endAdornment={
              <InputAdornment position= 'end'>
                <IconButton  size="small" color="theme" aria-label="go" onClick={handleButtonClick}>
                  <KeyboardReturnIcon  fontSize='small'/>
                </IconButton>
              </InputAdornment>
            }
            helperText={!isInputValid && t("LandingPage.BadEmail")}
            error={!isInputValid}
            />
          </Grid>
        </Grid>
      </Grid> 
    </Fragment>

    
  )
}

export default Welcome
