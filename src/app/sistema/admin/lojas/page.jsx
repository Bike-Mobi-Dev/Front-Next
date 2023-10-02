'use client'

import LojasScreen from '@/components/sistema/screens/LojasScreen'
import { ApiContext } from '@/contexts/Api'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {

  const { instance } = useContext(ApiContext)

    const [lojas, setLojas] = useState([])

    useEffect(() => {    
      instance.get(`/allLojas`)
      .then((response) => setLojas(response.data))
  }, [])

  return (
    <LojasScreen lojas={lojas}/>
  )
}

export default page