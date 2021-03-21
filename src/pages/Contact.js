import React, { useState, useEffect } from "react";
import * as yup from "yup";
import InputMask from "react-input-mask";
import {
  IconButton,
  TextField,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  InputAdornment,
  Modal,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  PersonPinCircle as PersonPinCircleIcon,
  Send as SendIcon,
  DoneOutline as DoneOutlineIcon,
  Autorenew as LoadingIcon,
  ErrorOutline as ErrorOutlineIcon,
} from "@material-ui/icons/";

import location from "../assets/location.png";

//Send emails
import emailjs, { init } from "emailjs-com";
init("user_LsOAq0He48PHag6eY379e");

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: "36em",
  },
  titleContainer: {
    backgroundColor: theme.palette.common.blue,
    //background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))",
    minHeight: "10em",
  },
  title: {
    paddingBottom: "0.3em",
    borderBottom: `4px solid ${theme.palette.common.razz}`,
  },
  imageContainer: {
    backgroundImage: `url(${location})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(1px)",
    [theme.breakpoints.down("sm")]: {
      height: "100em",
    },
  },
  cardContainer: {
    paddingBottom: "8em",
    backgroundColor: theme.palette.common.white,
  },
  card: {
    borderRadius: 0,
    boxShadow: theme.shadows[5],
    width: "60em",
    maxWidth: "95%",
    marginTop: "-10em",
    zIndex: 1300,
  },
  textfieldContainer: {
    padding: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
  },
  textField: {
    marginBottom: "1em",
  },
  contactInfoContainer: {
    padding: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5em",
      height: "10em",
    },
    backgroundColor: theme.palette.common.blue,
  },
  contactItem: {
    padding: "0.5em 0",
    color: theme.palette.common.white,
  },
  modalCard: {
    width: "30em",
    height: "8em",
    padding: "2em",
    color: theme.palette.common.black,
    boxShadow: theme.shadows[10],
    borderRadius: 0,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [emailProps, setEmailProps] = useState({
    nome: null,
    email: null,
    telefone: null,
    mensagem: null,
  });

  const handleChange = (event) => {
    const target = event.target;
    setEmailProps({
      ...emailProps,
      [target.id]: target.value,
    });
  };

  const [errorNome, setErrorNome] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorTelefone, setErrorTelefone] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");

  const [submit, setSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailMessage, setEmailMessage] = useState("loading");

  const errorChangeHandle = (field) => {
    switch (field) {
      case "nome":
        return setErrorNome;
      case "email":
        return setErrorEmail;
      case "telefone":
        return setErrorTelefone;
      case "mensagem":
        return setErrorMensagem;
      default:
        return;
    }
  };

  const contactSchema = yup.object().shape({
    mensagem: yup
      .string()
      .required("Campo obrigatório.")
      .min(10, "Mensagem tem que ter ao menos 10 caracteres.")
      .nullable(),
    telefone: yup
      .string()
      .required("Campo Obrigatório.")
      .min(8, "Telefone tem que ter ao menos 8 caracteres.")
      .matches(
        /\(\d{2}\)\s\d{4,5}-\d{4}/g,
        "Número de telefone inválido. Precisa ser: (xx) xxxxx-xxxx"
      )
      .nullable(),
    email: yup
      .string()
      .email("Email inválido.")
      .required("Campo Obrigatório")
      .nullable(),
    nome: yup
      .string()
      .required("Campo Obrigatório.")
      .min(4, "Nome tem que ter ao menos 4 caracteres.")
      .nullable(),
  });

  const validateField = (field) => {
    contactSchema
      .validateAt(field, emailProps)
      .then(() => {
        const setError = errorChangeHandle(field);
        setError("");
      })
      .catch((err) => {
        const setError = errorChangeHandle(field);
        setError(err.message);
      });
  };

  useEffect(() => {
    validateField("nome");
    return;
  }, [emailProps]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    validateField("email");
    return;
  }, [emailProps]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    validateField("telefone");
    return;
  }, [emailProps]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    validateField("mensagem");
    return;
  }, [emailProps]); // eslint-disable-line react-hooks/exhaustive-deps

  const sendMessage = () => {
    setSubmit(true);
    contactSchema
      .validate(emailProps)
      .then(() => {
        setEmailSent(true);
        emailjs.send("service_l7rhavb", "template_nclsmt2", emailProps).then(
          function (response) {
            setEmailMessage("sucesso");
          },
          function (error) {
            setEmailSent(true);
            setEmailMessage("erro");
          }
        );
      })
      .catch((err) => {
        for (var field in emailProps) {
          if (emailProps[field] === null) {
            setEmailProps({ ...emailProps, [field]: "" });
          }
        }
      });
  };

  useEffect(() => {
    return;
  }, [submit]);

  useEffect(() => {
    return;
  }, [emailSent, emailMessage, emailProps]);

  const modalType = (tipo) => {
    if (tipo === "loading") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LoadingIcon style={{ color: "#ffea00" }} />
          <span style={{ paddingLeft: "1em" }} />
          <Typography variant="body1"> Carregando...</Typography>
        </div>
      );
    } else if (tipo === "sucesso") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DoneOutlineIcon style={{ color: "#4caf50" }} />
          <span style={{ paddingLeft: "1em" }} />
          <Typography variant="body1"> Email enviado com sucesso.</Typography>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ErrorOutlineIcon style={{ color: "#b22a00" }} />
          <span style={{ paddingLeft: "1em" }} />
          <Typography variant="body1"> Algo deu errado.</Typography>
        </div>
      );
    }
  };

  const modal = (
    <Modal
      justify="center"
      alignItems="center"
      open={emailSent}
      onClose={() => {
        emailMessage === "sucesso"
          ? window.location.reload()
          : setEmailSent(false);
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className={classes.modalCard}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {modalType(emailMessage)}
      </Card>
    </Modal>
  );

  return (
    <React.Fragment>
      {emailSent ? modal : ""}
      <Grid container>
        <Grid
          container
          item
          direction={matchesSM ? "column" : "row"}
          className={classes.bannerContainer}
        >
          <Grid
            item
            container
            xs
            justify="center"
            alignItems="center"
            className={classes.titleContainer}
          >
            <Grid item>
              <Typography variant="h2" className={classes.title}>
                Contato
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.imageContainer} xs></Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          align="center"
          className={classes.cardContainer}
        >
          <Card className={classes.card}>
            <Grid container direction={matchesSM ? "column" : "row"}>
              <Grid item container direction="row">
                <Grid
                  component="form"
                  item
                  container
                  md
                  direction="column"
                  justify="space-between"
                  className={classes.textfieldContainer}
                >
                  <Typography
                    variant="h4"
                    align="left"
                    style={{ fontWeight: 300 }}
                    gutterBottom
                  >
                    Me envie uma Mensagem
                  </Typography>
                  <TextField
                    className={classes.textField}
                    id="nome"
                    label="Nome"
                    error={
                      errorNome !== "" && (emailProps.nome !== null || submit)
                    }
                    helperText={
                      errorNome !== "" && (emailProps.nome !== null || submit)
                        ? errorNome
                        : ""
                    }
                    onChange={(event) => handleChange(event)}
                    value={emailProps.nome ? emailProps.nome : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <InputMask
                    mask="(99) 99999-9999"
                    className={classes.textField}
                    value={emailProps.telefone ? emailProps.telefone : ""}
                    label="Telefone"
                    onChange={(event) => handleChange(event)}
                    maskChar={"_"}
                  >
                    {(inputProps) => (
                      <TextField
                        label="Telefone"
                        id="telefone"
                        className={classes.textField}
                        error={
                          errorTelefone !== "" &&
                          (emailProps.telefone !== null || submit)
                        }
                        helperText={
                          errorTelefone !== "" &&
                          (emailProps.telefone !== null || submit)
                            ? errorTelefone
                            : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </InputMask>
                  <TextField
                    className={classes.textField}
                    id="email"
                    error={
                      errorEmail !== "" && (emailProps.email !== null || submit)
                    }
                    helperText={
                      errorEmail !== "" && (emailProps.email !== null || submit)
                        ? errorEmail
                        : ""
                    }
                    label="E-mail"
                    onChange={(event) => handleChange(event)}
                    value={emailProps.email? emailProps.email : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    className={classes.textField}
                    id="mensagem"
                    label="Mensagem"
                    error={
                      errorMensagem !== "" &&
                      (emailProps.mensagem !== null || submit)
                    }
                    helperText={
                      errorMensagem !== "" &&
                      (emailProps.mensagem !== null || submit)
                        ? errorMensagem
                        : ""
                    }
                    onChange={(event) => handleChange(event)}
                    value={emailProps.mensagem? emailProps.mensagem : ""}
                    multiline
                    rows={3}
                  />
                  <Grid item container justify="flex-end">
                    <IconButton
                      component="button"
                      onClick={() => sendMessage()}
                      style={{
                        backgroundColor: theme.palette.common.razz,
                        marginTop: "1em",
                      }}
                    >
                      <SendIcon style={{ color: theme.palette.common.white }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  md
                  className={classes.contactInfoContainer}
                >
                  <Grid
                    item
                    container
                    alignItems="center"
                    className={classes.contactItem}
                  >
                    <MailIcon />
                    <Typography variant="body1">
                      <span style={{ margin: "0.5em" }} />
                      jorgevinicius101001@gmail.com
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems="center"
                    className={classes.contactItem}
                  >
                    <PhoneIcon />
                    <Typography variant="body1">
                      <span style={{ margin: "0.5em" }} />
                      +55 (79) 99658-6902
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    aligntems="center"
                    className={classes.contactItem}
                  >
                    <PersonPinCircleIcon />
                    <Typography variant="body1">
                      <span style={{ margin: "0.5em" }} />
                      Aracaju, SE
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
