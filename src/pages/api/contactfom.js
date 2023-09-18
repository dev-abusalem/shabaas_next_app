export default function handler(req, res) {
    if (req.method === 'POST') {
       try {



        res.status(200).json({ name: 'John Doe' })

        
       } catch (error) {
        
       }
    }
  }
  