const User = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (<>User Page: {id}</>);
}

export default User;