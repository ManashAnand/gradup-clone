'use client'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Input, Spacer, Textarea } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Button,
  Loading,
} from '@nextui-org/react'
import { StyledBadge } from '@styles/StyledBadged'
import { IconButton } from '@styles/IconButton'
import { EyeIcon } from '@styles/EyeIcon'
import { EditIcon } from '@styles/EditIcon'
import { DeleteIcon } from '@styles/DeleteIcon'

const Experience = ({
  companyName,
  location,
  startDate,
  endDate,
  title,
  skills,
  description,
  id,
}) => {
  const { data: session } = useSession()
  const [updating, setIsUpdating] = useState(0)
  const [experience, setExperience] = useState({
    companyName: companyName,
    location: location,
    startDate: startDate,
    endDate: endDate,
    title: title,
    skills: skills,
    description: description,
    _id: id,
  })

  const updateExperience = async (e) => {
    // e.preventDefault();
    setIsUpdating(2)
    try {
      const response = await fetch(
        `/api/user/${session?.user.id}/?type=experience&action=update`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: id,
            companyName: experience.companyName,
            location: experience.location,
            startDate: startDate,
            endDate: endDate,
            title: experience.title,
            skills: experience.skills,
            description: experience.description,
          }),
        }
      )
      setIsUpdating(0)
    } catch (error) {
    } finally {
    }
  }
  const deleteExperience = async () => {
    window.location.reload()
    window.scrollTo(0, 0)
    // e.preventDefault();
    // console.log(e.target[0].value);
    try {
      const response = await fetch(
        `/api/user/${session?.user.id}/?type=experience&action=delete`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: id,
          }),
        }
      )
    } catch (error) {
    } finally {
    }
  }

  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        <div className='px-3 py-3 rounded-2xl text-white resumedatabox bg-sky-700 text-center mt-6 mx-auto'>
          <Input
            labelLeft='Company'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={experience.companyName}
            onChange={(e) =>
              setExperience({ ...experience, companyName: e.target.value })
            }
          />
          <Input
            labelLeft='Location'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={experience.location}
            onChange={(e) =>
              setExperience({ ...experience, location: e.target.value })
            }
          />
          <Input
            labelLeft='Start Date'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={experience.startDate.split('T')[0]}
            onChange={(e) =>
              setExperience({ ...experience, startDate: e.target.value })
            }
          />
          <Input
            labelLeft='End Date'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={
              experience.endDate ? experience.endDate.split('T')[0] : ''
            }
            onChange={(e) =>
              setExperience({ ...experience, endDate: e.target.value })
            }
          />
          <Input
            labelLeft='Title'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={experience.title}
            onChange={(e) =>
              setExperience({ ...experience, title: e.target.value })
            }
          />
          <Input
            labelLeft='Skills'
            css={{ mt: '$4', width: 'stretch', mb: '$4', height: '35px' }}
            initialValue={experience.skills}
            onChange={(e) =>
              setExperience({ ...experience, skills: e.target.value })
            }
          />
          <Textarea
            css={{
              mt: '$4',
              width: 'stretch',
              height: 'fit-content',
              mb: '$4',
            }}
            initialValue={experience.description}
            onChange={(e) =>
              setExperience({ ...experience, description: e.target.value })
            }
          />
        </div>
        <div className='flex justify-center gap-4'>
          {updating == 0 ? (
            <>
              <div>
                <button
                  className='text-white bg-blue-400 hover:bg-blue-500 px-6 py-1 rounded-md mt-4'
                  onClick={() => setIsUpdating(1)}
                >
                  Edit
                </button>
              </div>
            </>
          ) : updating == 1 ? (
            <button
              className='text-white bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-md mt-4'
              onClick={updateExperience}
            >
              Update
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={deleteExperience}
            className='text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded-md mt-4'
          >
            Delete
          </button>
        </div>
      </div>
      <div className='mb-15 pb-10'></div>
    </div>
  )
}

export default Experience
