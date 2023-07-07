import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
const Header = () => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((state) => state && state.isLoggedIn); // Add null/undefined check

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,156,1) 75%, rgba(0,212,255,1) 94%);",
      }}
    >
      <Toolbar>
        <Typography variant="h4">EA BlogsApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All EA Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
              <Tab LinkComponent={Link} to="/news" label="News" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
         {
          !isLoggedIn && <>
          <Button
          LinkComponent={Link}
          to="/auth"
          variant="contained"
          color="error"
          sx={{ margin: 1, borderRadius: 10 }}
        >
          Login
        </Button>

        <Button
          LinkComponent={Link}
          to="/auth"
          variant="contained"
          color="error"
          sx={{ margin: 1, borderRadius: 10 }}
        >
          SignUp
        </Button>
          </>
         }
         {isLoggedIn &&( <Button
          LinkComponent={Link}
          to="/auth"
          variant="contained"
          color="error"
          sx={{ margin: 1, borderRadius: 10 }}
        >
          LogOut
        </Button>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
