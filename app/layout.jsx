
import '@styles/globals.css';

export const metadata={
    title:'DoorDash',
    description:'logins'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='md:bg-white'>
            {children}
        </body>
    </html>
  )
}

export default RootLayout