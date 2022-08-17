import React, { useEffect, useState, useRef } from 'react'
import { AppBar, Box, Button, Card, Divider, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { ArrowUpward, ChevronRight, ChevronLeft, Person, Comment, ArrowDownward, KeyboardArrowUp, KeyboardArrowDown, Filter } from '@mui/icons-material';
import { timeDifference } from '../../lib/Functions';
import CommentCreate from './CommentCreate';
import { useTheme } from '@emotion/react';
import { convertFromRaw, EditorState, Editor } from 'draft-js';
import createLinkDecorator from '../ui/Link';


const CommentsTemplate = (props) => {
  const { data, type, checked, setChecked, opinionId, responseId, reply } = props;
  const [comments, setComments] = useState();
  const [contentData, setContentData] = useState();
  const { articleId } = useParams();
  const navigate = useNavigate();
  const authContext = useAuth();
  const [databaseLocation, setDatabaseLocation] = useState();
  const [tall, setTall] = useState(false);

  const theme = useTheme();

  const itemColor = {
    course: `${theme.palette.primary.main}`,
    assignment: `${theme.palette.primary.main}`,
    opinion: `${theme.palette.opinion.main}`,
    response: `${theme.palette.response.main}`,
    reply: `${theme.palette.reply.main}`
  }
  
  const itemColorDark = {
    course: `${theme.palette.primary.dark}`,
    assignment: `${theme.palette.primary.dark}`,
    opinion: `${theme.palette.opinion.dark}`,
    response: `${theme.palette.response.dark}`,
    reply: `${theme.palette.reply.dark}`
  }
  
  //console.log('data.course: ', data.course);
  // console.log('data: ', data);
  // console.log('contentData: ', contentData);
  // console.log('comments', comments);
  // console.log('opinionId: ', opinionId);
  // console.log('responseId: ', responseId);
  const getDatabaseLocation = () => {
    if(!opinionId) {
      if(responseId){
        setDatabaseLocation(`response`);
        //setDatabaseLocation(`opinions/${opinionId}/responses/${responseId}`)
      } else {
        setDatabaseLocation(`opinions`);
        // setDatabaseLocation(`opinions/${opinionId}`)
      }
    }
  }

  useEffect(() => {
    getDatabaseLocation()
  }, [opinionId, responseId, reply])
  
  useEffect(() => {
    if(data){
      setContentInfo();
    }
  }, [data])

  const setContentInfo = () => {
    if (data.type === 'opinion') {
      setContentData({
        ...contentData,
        ...data,
        opinionId: data.id,
      })
    } else if (data.type === 'response') {
      setContentData({
        ...contentData,
        ...data,
        responseId: data.id,
      })
    } else if (data.type === 'reply') {
      setContentData({
        ...contentData,
        ...data,
        replyId: data.id,
      })
    }
  }

  useEffect(() => {
    if (contentData?.type === 'opinion') {
      getOpinionComments();
    } else if (contentData?.type === 'response') {
      getResponseComments();
    } else if (contentData?.type === 'reply') {
      getReplyComments();
    }
  }, [contentData])

  const getOpinionComments = async () => {
    try {
      const collectionRef = collection(db, 'courses', contentData.course, 'assignments', contentData.assignmentId, 'comments');
      console.log(contentData.assignmentId, contentData.opinionId);
      const qOpinion = query(
        collectionRef,
        orderBy('createdAt', 'desc'),
        where('type', '==', 'opinion'),
        where('assignmentId', '==', contentData.assignmentId),
        where('opinionId', '==', contentData.opinionId)
      )
      onSnapshot(qOpinion, (snapshot) => {
        setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
    } catch (error) {
      console.log('Error getting comments', error);
    }
  } 

  const getResponseComments = async () => {
    try {
      const collectionRef = collection(db, 'courses', contentData.course, 'assignments', contentData.assignmentId, 'comments');
      const qResponse = query(
        collectionRef, 
        orderBy('createdAt', 'desc'),
        where('type', '==', 'response'),
        where('assignmentId', '==', contentData.assignmentId),
        where('opinionId', '==', contentData.opinionId),
        where('responseId', '==', contentData.responseId)
      )
      onSnapshot(qResponse, (snapshot) => {
        setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
    } catch (error) {
      console.log('Error getting comments', error);
    }
  } 

  const getReplyComments = async () => {
    try {
      const collectionRef = collection(db, 'courses', contentData.course, 'assignments', contentData.assignmentId, 'comments');
      const qReply = query(
        collectionRef, 
        orderBy('createdAt', 'desc'),
        where('type', '==', 'reply'),
        where('assignmentId', '==', contentData.assignmentId),
        where('opinionId', '==', contentData.opinionId),
        where('responseId', '==', contentData.responseId),
        where('replyId', '==', contentData.replyId)
      )

      onSnapshot(qReply, (snapshot) => {
        setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
    } catch (error) {
      console.log('Error getting comments', error);
    }
  } 

  // VISUALLY SEPARATE CURRENT USERS COMMENTS
  const [distinguish, setDistinguish] = useState();
  const [isCurrentUser, setIsCurrentUser] = useState(true);

  const distinguishComments = (isCurrentUser, comment) => {
    switch (isCurrentUser) {
      case true:
        return comment.commentAuthor == authContext.account.id
    
      case false:
        return null
    }
  }

  const decorator = createLinkDecorator();

  

  const bottomRef = useRef(null);

  useEffect(() => {
    //scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [comments]);

  return (
    <Grid
      // purple drawer
      className="Discussion Template 1"
      container
      justifyContent="flex-start"
      sx={{
        backgroundColor:'#eee',
        boxShadow:'0px 0px 20px #1F054050',
        width:{xs: '90vw', sm:'600px'},
        pt:10,
        // height:'100vh'
      }}
    >
      <Grid
      // purple drawer
        container
        onClick={checked ? () => setChecked(false) : () => setChecked(true)}
        sx={{
          width:60,
          transition:'.25s',
          backgroundColor:`${itemColor[type]}50`,
          color:`${itemColorDark[type]}`,
          '&&:hover': {
            backgroundColor:`${itemColorDark[type]}80`,
            color:`#ffffffaa`,
          },
          alignItems:'center',
          justifyContent:'center',
          cursor:'pointer',
          height:'100vh',
          mt:-10,
        }}
      >
        {checked ? 
          <Grid container alignItems="center" direction="column"><ChevronRight /><Comment /></Grid>
        : 
          <Grid container alignItems="center" direction="column"><ChevronLeft /><Comment /></Grid>}
      </Grid>
      <Grid
      // full heigt of drawer. Comments and textbox
        className="Article Template 2"
        item
        sx={{
          position:'relative'
        }}
        pb={6}
        xs={10.75}
        // sm={10}
        // md={8}
        // lg={6}
      >
        <Tooltip
          title={<Typography sx={{color:'#fff'}}>{isCurrentUser ? 'Reset comments' : 'Separate your comments'}</Typography>}
          arrow
          placement='left'
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: 'primary.main',
                px:3,
                py:1
              },
              "& .MuiTooltip-arrow": {
                color: 'primary.main',
              }
            }
          }}
        >
          <Box
            onClick={() => setIsCurrentUser(!isCurrentUser)}
            sx={{
              position:'absolute',
              top:0,
              right:30,
              width:40,
              height:40,
              backgroundColor:'primary.main',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
              transition:'.25s',
              '&&:hover':{
                cursor:'pointer',
                borderRadius:2
              }
            }}
          >
            <Filter sx={{color:'#fff'}} />
          </Box>
        </Tooltip>










        {comments?.length > 1 ? null : <Typography>Be the first to comment on this {type}.</Typography>}
        <Grid
          container
          sx={{
            maxHeight: tall ? '20vh' : 'calc(100vh - 300px)',
            overflow:'auto',
            pl:4
          }}
        >
          {comments?.map((comment, index) => (
            <Grid
              container
              sx={{
                justifyContent: distinguishComments(isCurrentUser, comment) ? 'flex-end' : 'flex-start',
              }}
            >
              <Card
                sx={{
                  mb:1,
                  backgroundColor: '#fff',
                }}
              >
                <Grid
                  container
                  spacing={1.5}
                  sx={{
                    backgroundColor: distinguishComments(isCurrentUser, comment) ? `${itemColorDark[type]}40` : `${itemColor[type]}05`,
                    alignItems: 'flex-start',
                    p:1,
                    pr:2,
                    pb:1
                  }}
                >
                  <Grid item>
                    {comment?.commentAuthorAvatar ? (
                      <Box
                        sx={{
                          width:'38px',
                          height:'38px',
                          borderRadius:40,
                          overflow:'hidden'
                        }}
                      >
                      <img
                        src={comment.commentAuthorAvatar}
                        style={{
                          width:'100%',
                          // height:'100%',
                          objectFit:'cover'
                        }}
                        // width="30px"
                        // height="30px"
                        // objectFit="cover"
                        alt="avatar"
                      />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          backgroundColor:itemColorDark[type],
                          width:'30px',
                          height:'30px',
                          borderRadius:30,
                          p:.5
                        }}
                      >
                        <Person sx={{fontSize:30, color:'white'}}/>
                      </Box>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs
                  >
                    <Typography sx={{fontWeight:500}}>{`${comment?.commentAuthorFirst} ${comment?.commentAuthorLast}`}</Typography>
                    <Grid item>
                      <Grid container>
                        <Typography variant="h4" sx={{color:'text.light', fontSize:12, textTransform:'uppercase'}}>{`${timeDifference(comment?.createdAt?.toDate())} on `}</Typography>
                        <Typography variant="h4" sx={{color:'text.light', fontSize:12, textTransform:'uppercase', ml:.8}}>{comment?.updatedAt?.toDate().toLocaleDateString('en-us', {year: 'numeric', month: 'numeric', day: 'numeric'})}</Typography>
                      </Grid>
                      <Typography sx={{whiteSpace:'pre-line', lineHeight:1.2}}>
                        <Editor
                          editorState={comment?.commentBody ? EditorState.createWithContent(convertFromRaw(JSON.parse(comment.commentBody)), decorator) : EditorState.createEmpty()}
                          readOnly={true}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <div ref={bottomRef} />
        </Grid>










        
        <Box
        //text box expand drawer
          onClick={() => setTall(!tall)}
          sx={{
            display:'flex',
            justifyContent:'center',
            backgroundColor:`${itemColor[type]}50`,
            mb:2,
            transition:'.25s',
            '&&:hover':{
              backgroundColor:`${itemColorDark[type]}80`,
              cursor:'pointer'
            }
          }}
        >
          {/* <IconButton
            onClick={() => setTall(!tall)}
          > */}
            {tall ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          {/* </IconButton> */}
        </Box>
        <Grid
        // textbox
          container
          sx={{
            pl:2,
            height: tall ? '50vh' : '150px',
            // maxHeight: tall ? '80vh' : '150px',
            overflow:'auto'
          }}
        >
          <CommentCreate current={data} parent={databaseLocation} type={type} tall={tall} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CommentsTemplate