/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import Layout from 'Layouts';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@paljs/ui/Button';


 

export default function TinyMCE() {
  

  useEffect(()=>{
    const result = localStorage.getItem('content')
    setContent(result)
    
  })


  const handleEditorChange = (content: any, _editor: any) => {
    //console.log(content);
    setContent(content)
    localStorage.setItem('content',content)
  };

 
  
const [content,setContent] = useState('')

  return (
    <Layout title="Tiny MCE editor">
      <Card>
        <header>Tiny MCE  </header>
       
 
    
        <CardBody>
          <Editor
            initialValue={content}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
          />
          <Button
          
          
          >Subimit</Button>
        </CardBody>
      </Card>
      <Card>
            <div dangerouslySetInnerHTML={{__html:content }} >

            </div>
      </Card>
    </Layout>
  );
}
