import React from 'react'
import TipsCategories from '@/components/TipsCategories'
import VariableHero from '@/components/VariableHero'

const TipsPage = () => {
  return (
    <>
    <VariableHero 
    backgroundImage='https://images.unsplash.com/photo-1715559929394-4c5fdda7c50d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    serviceName='Handyman Tips for Coachella Valley Homeowners'
    description='Discover professional handyman tips and expert advice from Coachella Valley Handyman.'
    />
    <TipsCategories />
    </>
  )
}

export default TipsPage