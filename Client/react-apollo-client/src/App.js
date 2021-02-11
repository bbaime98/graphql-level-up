import React from 'react';
import './App.css';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";

const READ_TODOS = gql`
  query todos{
    todos {
      id
      text
      completed
    }
  }
`;
