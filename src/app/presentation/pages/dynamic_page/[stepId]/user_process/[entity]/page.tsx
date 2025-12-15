

async function UserProcess({params}: {params: Promise<{userId:string}>}) {

    const {userId}=await params;
   
    return <>
    <h1>
        proceso para usuario {userId}
    </h1>
    

    </>
    
}

export default UserProcess;