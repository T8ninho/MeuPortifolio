import {useState} from 'react';
import storage from '../firebase';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';

export default function UploadImagem() {

  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  // const upload = () =>{
  //   if(image == null)
  //     return;
  //   storage.ref(`/images/${image.name}`).put(image)
  //   .on("state_change", alert("Sucesso"), alert);
  // }

  const upload = storage.ref(`/images/${image.name}`).put(image)

  upload.on("state_change", function(){

    upload.snapshot.ref.getDownloadURL().then( function Imagem(url_imagem) {
      setLink(url_imagem)
    })

  }, function(error){

    console.warn("Falha ao enviar a imagem...")

  })
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <img style={{
        width:"40%",
        height:"40%",}}
        src={link}
        />
        <p>{link}</p>
      <div>
        <Input 
          accept="image/*" 
          id="contained-button-file" 
          multiple 
          type="file"
          display='none'
          onChange={setImage}
        />
        <Button 
          variant="contained" 
          color='vermelho'
          component="span"
          onClick={(e)=>{setImage(e.target.files[0])}}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}