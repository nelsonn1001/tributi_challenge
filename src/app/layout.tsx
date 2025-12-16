
'use client'

import { useState } from "react";
import UserEntity from "./domain/entities/user_entity";
import {SchemaPageContext, UserContext } from "./presentation/controllers/context_controller";
import { NewUser } from "./presentation/controllers/create_new_user_controller";
import GetSchemaUseCase from "./domain/use_cases/get_schema_use_case";
import SchemaEntity from "./domain/entities/schema_entity";
import HeaderPage from "./presentation/components/header_page";
import styles from '@/src/app/page.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const[currentUser,setCurrentUser]=useState<UserEntity>(NewUser());
  const[schema,setSchema]=useState<SchemaEntity>(GetSchemaUseCase('v1'));

  return (
    <html lang="en">
      <body
        className={styles['tr-ch-div-main']}
      >
        <SchemaPageContext.Provider value={{schema,setSchema}}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <main>
            <HeaderPage></HeaderPage>
            {children}
          </main>
        </UserContext.Provider>
      </SchemaPageContext.Provider>
      </body>
    </html>
  );
}
