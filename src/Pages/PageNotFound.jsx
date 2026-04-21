import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Paper, Chip, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { keyframes } from '@emotion/react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import HomeIcon from '@mui/icons-material/Home'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

// Define animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(244, 180, 0, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(244, 180, 0, 0);
  }
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

function PageNotFound() {
  const navigate = useNavigate()
  const [puzzle, setPuzzle] = useState([])
  const [moves, setMoves] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [showGame, setShowGame] = useState(false)

  // Initialize puzzle
  const initializePuzzle = () => {
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1)
    numbers.push(null) // Empty space
    setPuzzle(numbers)
    setMoves(0)
    setIsComplete(false)
    setStartTime(Date.now())
    setElapsedTime(0)
  }

  // Shuffle puzzle
  const shufflePuzzle = () => {
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1)
    numbers.push(null)
    
    // Shuffle array
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    setPuzzle(numbers)
    setMoves(0)
    setIsComplete(false)
    setStartTime(Date.now())
    setElapsedTime(0)
  }

  // Check if puzzle is solved
  const checkWin = (newPuzzle) => {
    const solved = Array.from({ length: 15 }, (_, i) => i + 1).concat(null)
    const isSolved = newPuzzle.every((num, index) => num === solved[index])
    
    if (isSolved && !isComplete) {
      setIsComplete(true)
      const endTime = Date.now()
      setElapsedTime(Math.floor((endTime - startTime) / 1000))
    }
    
    return isSolved
  }

  // Handle tile click
  const handleTileClick = (index) => {
    if (isComplete) return

    const emptyIndex = puzzle.indexOf(null)
    const row = Math.floor(index / 4)
    const col = index % 4
    const emptyRow = Math.floor(emptyIndex / 4)
    const emptyCol = emptyIndex % 4

    // Check if tile is adjacent to empty space
    const isAdjacent = (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    )

    if (isAdjacent) {
      const newPuzzle = [...puzzle]
      newPuzzle[emptyIndex] = newPuzzle[index]
      newPuzzle[index] = null
      
      setPuzzle(newPuzzle)
      setMoves(prev => prev + 1)
      checkWin(newPuzzle)
    }
  }

  // Initialize on mount
  useEffect(() => {
    initializePuzzle()
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: `${float} 6s ease-in-out infinite`,
        }
      }}
    >
      {/* Animated background circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(244, 180, 0, 0.2)',
          animation: `${float} 4s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: `${float} 5s ease-in-out infinite reverse`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(244, 180, 0, 0.15)',
          animation: `${float} 3s ease-in-out infinite`,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            py: 4,
          }}
        >
          {/* Animated 404 with icon */}
          <Box
            sx={{
              animation: `${fadeInUp} 1s ease-out`,
              mb: 2,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: '8rem',
                color: '#f4b400',
                animation: `${rotate} 2s linear infinite`,
                mb: 2,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4rem', md: '6rem' },
                fontWeight: 'bold',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                animation: `${pulse} 2s infinite`,
                mb: 1,
              }}
            >
              404
            </Typography>
          </Box>

          {/* Animated title */}
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: 'white',
              fontWeight: 'bold',
              animation: `${fadeInUp} 1.2s ease-out`,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Oops! Page Not Found
          </Typography>

          {/* Animated description */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '500px',
              animation: `${fadeInUp} 1.4s ease-out`,
              lineHeight: 1.6,
            }}
          >
            The page you're looking for seems to have wandered off into the digital wilderness.
            Don't worry, let's get you back on track!
          </Typography>

          <Box sx={{ mb: 4 }}>
            {!showGame ? (
              <Button
                variant="contained"
                onClick={() => setShowGame(true)}
                sx={{
                  backgroundColor: '#f4b400',
                  color: 'black',
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#e6a400',
                  },
                }}
              >
                Play Puzzle Game
              </Button>
            ) : null}
          </Box>

          {/* Puzzle Game Section */}
          {showGame && (
          <Paper
            elevation={6}
            sx={{
              p: 3,
              mb: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 3,
              maxWidth: '500px',
              width: '100%',
              animation: `${fadeInUp} 1.8s ease-out`,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>
              🧩 While You're Here... Solve a Puzzle!
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
              Slide the tiles to arrange numbers 1-15 in order. Click adjacent tiles to move them into the empty space.
            </Typography>

            {/* Game Stats */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Chip
                label={`Moves: ${moves}`}
                sx={{ backgroundColor: '#f4b400', color: 'black', fontWeight: 'bold' }}
              />
              {isComplete && (
                <Chip
                  icon={<CheckCircleIcon />}
                  label={`Solved in ${elapsedTime}s!`}
                  sx={{ backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
                />
              )}
            </Box>

            {/* Puzzle Grid */}
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={1} sx={{ maxWidth: '320px', mx: 'auto' }}>
                {puzzle.map((number, index) => (
                  <Grid item xs={3} key={index}>
                    <Box
                      onClick={() => handleTileClick(index)}
                      sx={{
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: number ? '#f4b400' : 'transparent',
                        color: number ? 'black' : 'transparent',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: 1,
                        cursor: number ? 'pointer' : 'default',
                        boxShadow: number ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                        border: number ? '2px solid #e6a400' : '2px dashed #ccc',
                        transition: 'all 0.2s ease',
                        animation: number ? `${slideIn} 0.3s ease-out` : 'none',
                        '&:hover': number ? {
                          backgroundColor: '#e6a400',
                          transform: 'scale(1.05)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        } : {},
                      }}
                    >
                      {number}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Game Controls */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<ShuffleIcon />}
                onClick={shufflePuzzle}
                disabled={isComplete}
                sx={{
                  backgroundColor: '#f4b400',
                  color: 'black',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#e6a400' },
                  '&:disabled': { backgroundColor: '#ccc', color: '#666' },
                }}
              >
                Shuffle
              </Button>

              <Button
                variant="outlined"
                onClick={initializePuzzle}
                sx={{
                  borderColor: '#f4b400',
                  color: '#f4b400',
                  '&:hover': {
                    borderColor: '#e6a400',
                    backgroundColor: 'rgba(244, 180, 0, 0.1)',
                  },
                }}
              >
                New Game
              </Button>
            </Box>

            {isComplete && (
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#e8f5e8', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  🎉 Congratulations! Puzzle Solved!
                </Typography>
                <Typography variant="body2" sx={{ color: '#2e7d32', mt: 1 }}>
                  You completed the puzzle in {moves} moves and {elapsedTime} seconds!
                </Typography>
              </Box>
            )}
          </Paper>
          )}

          {/* Navigation buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
              animation: `${fadeInUp} 2s ease-out`,
            }}
          >
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
              sx={{
                backgroundColor: '#f4b400',
                color: 'black',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(244, 180, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e6a400',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(244, 180, 0, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Go Home
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#f4b400',
                  transform: 'translateY(-2px)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Fun animated text */}
          <Typography
            variant="caption"
            sx={{
              mt: 4,
              color: 'rgba(255, 255, 255, 0.6)',
              animation: `${fadeInUp} 2.2s ease-out`,
              fontStyle: 'italic',
            }}
          >
            Lost in the digital maze? 🧩 Solve a puzzle while finding your way!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default PageNotFound