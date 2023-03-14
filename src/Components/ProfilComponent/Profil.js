import React from 'react'
import Adress from './AddressComponent/adress'
import Email from './EmailComponent/Email'
import Name from './NameComponent/Name'
import PersonalInfo from "./PersonalInfoComponent/PersonalInfo"

export default function Profil() {
  return (
    <>
    <Adress/>
    <Email/>
    <Name/>
    <PersonalInfo/>
    </>
  )
}
