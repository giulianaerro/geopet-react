const API_BASE_URL = "https://geopet.herokuapp.com";

export async function signIn(email: string, password: string) {
  const signInRes = await fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const resSignIn = await signInRes.json();
  return resSignIn;
}

export async function signUp(
  email: string,
  fullName: string,
  password: string
) {
  const signUpRes = await fetch(API_BASE_URL + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      fullName,
      password,
    }),
  });
  const resSignUp = await signUpRes.json();
  return resSignUp;
}

export async function editMyInfo(fullName, password, { token }) {
  const editMyInfoRes = await fetch(API_BASE_URL + "/me/edit", {
    method: "put",
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify({
      fullName,
      password,
    }),
  });
  const resEditMyInfo = await editMyInfoRes.json();

  return resEditMyInfo;
}

export async function createPetLost(data, token) {
  const createPetLostRes = await fetch(API_BASE_URL + "/pet/lost", {
    method: "post",
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify(data),
  });
  const resCreatePetLost = await createPetLostRes.json();

  return resCreatePetLost;
}

export async function getMyPets({ token }) {
  const myPetsRes = await fetch(API_BASE_URL + "/me/pets", {
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
  });

  const resMyPets = await myPetsRes.json();
  return resMyPets;
}

// export async function editPetReport(id, data) {
//   const editPetReport = await fetch(API_BASE_URL + "/pets/edit/" + id, {
//     method: "put",
//     headers: {
//       "content-type": "application/json",
//       authorization: "bearer " + currentState.user.token,
//     },
//     body: JSON.stringify(data),
//   });

// const resEditPetReport = await editPetReport.json();

//   if (resEditPetReport == true) {
//     window.alert("Su mascota fue modificada");
//   } else {
//     window.alert("No pudimos modificar su mascota");
//   }
// }

export async function petsAround(geoloc) {
  const { userLat, userLng } = geoloc;
  return await fetch(
    `${API_BASE_URL}/pets?userLat=${userLat}&userLng=${userLng}`
  );
}

export async function authUser(email: string) {
  const authUserRes = await fetch(API_BASE_URL + "/user/exist?email=" + email);
  const resAuth = await authUserRes.json();

  return resAuth;
}

// export async function deletePetReport(petId) {
//   const currentState = state.getState();

//   const deletPetRes = await fetch(API_BASE_URL + "/pet/delete", {
//     method: "delete",
//     headers: {
//       "content-type": "application/json",
//       authorization: "bearer " + currentState.user.token,
//     },
//     body: JSON.stringify(petId),
//   });
//   const resDeletPet = await deletPetRes;
//   return resDeletPet;
// }
export async function sendReport(data) {
  const sendReportRes = await fetch(API_BASE_URL + "/pet/report", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resSendReport = await sendReportRes.json();

  if (resSendReport == true) {
    window.alert("Su reporte ha sido enviado");
    location.reload();
  } else {
    window.alert("No pudimos enviar tu reporte");
  }
}
