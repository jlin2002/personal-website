import { CircularProgress } from "@material-ui/core"
const LoadingSpinner = () => {
    return (
        <div className="spinner">
            <CircularProgress fontSize='large'/>
        </div> 
    )
}

export default LoadingSpinner
