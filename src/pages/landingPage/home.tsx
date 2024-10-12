import AppButton from "@features/ui/AppButton";
import Header from "@features/ui/layout/Navbar/Header";
import { Box, Stack, Typography } from "@mui/material";
import { LANDING_PAGE_ELLIPSE_IMAGES } from "./data";
import { Colors } from "@config/styles";
import Image1 from "./assets/image1.jpeg";
import Image2 from "./assets/image2.jpeg";
import Image3 from "./assets/image3.jpeg";
import GalleryImage from "./assets/Gallery.png";
import ExpensesImage from "./assets/Expenses.png";
import BackgroundVector1 from "./assets/Background.png";
import Logo from "@features/ui/logo/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import Divider from "./Divider";

//Landing page
export default function HomePage() {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", mx: "auto" }}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            alignItems: "center",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
          mt={4}
          mb={{ xs: "68.34px", md: "76px" }}
          mx={{ md: "100px" }}
        >
          <Stack
            sx={{
              flexDirection: "column",
              maxHeight: { md: "636px" },
              maxWidth: { md: "668px" },
              px: { xs: 2 },
            }}
            gap={{ xs: 6, md: 20 }}
          >
            <Stack gap={5}>
              <Box
                component="img"
                src={BackgroundVector1}
                alt={"Big city view."}
                loading="lazy"
                sx={{
                  position: "relative",
                  top: "-150px",
                  left: "-155px",
                  borderRadius: "0px 40px 40px 0px",
                  overflow: "hidden",
                  objectFit: "cover",
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Stack gap={2} textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "32px", md: "60px" },
                    lineHeight: { md: "70px" },
                    fontWeight: "bold",
                    letterSpacing: "0.15px",
                  }}
                >
                  Your Ultimate Trip Companion
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  Welcome to SebTravel - Your Passport to Seamless Adventures!
                  Discover, plan, and track your journeys effortlessly with our
                  intuitive web application. Start exploring now!
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexBasis: "50%",
                }}
                gap={2}
              >
                <AppButton
                  type="submit"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mb: { md: 2 } }}
                >
                  Plan your trip
                </AppButton>
                <AppButton
                  type="submit"
                  fullWidth
                  variant={"outlined"}
                  sx={{ mb: 2, display: { xs: "none", md: "inline-flex" } }}
                >
                  Learn more
                </AppButton>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                borderTop: "1px solid rgba(234, 234, 234, 1)",
                borderBottom: "1px solid rgba(234, 234, 234, 1)",
              }}
              alignItems={{ xs: "center" }}
              justifyContent={{ xs: "center", md: "left" }}
              minWidth={{ md: 668 }}
              py={{ xs: 2, md: 3 }}
            >
              <Stack
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                }}
                alignItems={{ xs: "right", md: "right" }}
                justifyContent={{ xs: "center" }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                  }}
                  alignItems={{ xs: "center" }}
                  gap={{ xs: 10, md: 2 }}
                >
                  <Typography variant="h5" py={0.625} mr={{ xs: 4, md: 2 }}>
                    1200+ users
                  </Typography>
                  <Stack sx={{ flexDirection: "row" }} mr={2}>
                    {LANDING_PAGE_ELLIPSE_IMAGES.map((item) => (
                      <img
                        key={`${item.id}`}
                        src={`${item.src}`}
                        alt={item.alt}
                        loading="lazy"
                        style={{
                          width: "55px",
                          height: "55px",
                          border: "1px",
                          borderRadius: "30px",
                          marginLeft: "-16px",
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
                <Stack>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ width: { md: 167 } }}
                  >
                    Track their trips in our App.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box
            sx={{ display: "flex", marginLeft: { xs: "auto" } }}
            flex-grow={1}
            gap={{ md: 3 }}
          >
            <Stack gap={3}>
              <Box
                component="img"
                src={Image1}
                alt={"Trailer in a park."}
                loading="lazy"
                sx={{
                  minHeight: { md: "451px" },
                  maxWidth: { md: "403px" },
                  width: { xs: "100%" },
                  borderRadius: "40px",
                  objectFit: "cover",
                  mb: { xs: "24px", md: 0 },
                  px: { xs: "15px", md: 0 },
                }}
              />
              <Box
                component="img"
                src={Image2}
                alt={"Beautiful sandy beach with trees."}
                loading="lazy"
                sx={{
                  minHeight: { md: "451px" },
                  maxWidth: { md: "403px" },
                  borderRadius: "40px",
                  objectFit: "cover",
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Stack>
            <Stack>
              <Box
                component="img"
                src={Image3}
                alt={"Big city view."}
                loading="lazy"
                sx={{
                  maxWidth: { md: "364px" },
                  minHeight: { md: "926px" },
                  borderRadius: "0px 40px 40px 0px",
                  overflow: "hidden",
                  objectFit: "cover",
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: { md: "1720px" },
            mx: "auto",
            mb: { xs: "32px", md: "161px" },
          }}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ mb: { xs: 4, md: 8 } }}
          >
            <Typography
              sx={{ color: Colors.primaryGreen, pb: { xs: 1 } }}
              variant="body2"
            >
              FEATURES
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "40px" },
                fontWeight: "bold",
                letterSpacing: "0.15px",
              }}
            >
              SebTravel best solution for travel
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              pr: { xs: 2, md: 0 },
              pl: { xs: 2, md: 0 },
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: "24px", md: "260px" }}
          >
            <Stack>
              <img
                src={GalleryImage}
                alt={"Big city view."}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "810px",
                  maxHeight: "630px",
                  borderRadius: "40px",
                }}
              />
            </Stack>
            <Stack
              sx={{
                maxWidth: "650px",
              }}
              justifyContent={"center"}
            >
              <Typography
                sx={{ color: Colors.primaryGreen, mb: { xs: 2, mb: 1 } }}
                variant="body2"
              >
                DASHBOARD
              </Typography>
              <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
                Organize All Your Trips in a Single Application
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, mb: 3 } }}
              >
                With our intuitive application, you can effortlessly organize
                all your trips in one convenient location. From itinerary
                details and booking confirmations to travel notes and essential
                documents, everything you need for a smooth and stress-free
                journey is just a tap away. Enjoy a clutter-free travel
                experience and stay in control of your adventures with ease.
              </Typography>
              <AppButton
                endIcon={<ArrowForwardIcon />}
                sx={{ width: { xs: "100%", md: "260px" } }}
              >
                Plan your trip
              </AppButton>
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              pr: { xs: 2, md: 0 },
              pl: { xs: 2, md: 0 },
              margin: { xs: "32px 0px 32px 0px", md: "72px 0px 72px 0px" },
            }}
          >
            <hr
              style={{
                height: 1,
                width: "100%",
                border: "1px solid rgba(234, 234, 234, 1)",
              }}
            ></hr>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              pr: { xs: 2, md: 0 },
              pl: { xs: 2, md: 0 },
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: "24px", md: "260px" }}
          >
            <Stack sx={{ maxWidth: "650px", mb: { xs: 4, mb: 0 } }}>
              <Typography
                sx={{ color: Colors.primaryGreen, mb: { xs: 2, mb: 1 } }}
                variant="body2"
              >
                EXPENSES
              </Typography>
              <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
                Expense Tracking for Your Travels
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, mb: 3 } }}
              >
                Keep a Close Watch on Your Travel Costs with our User-Friendly
                Expense Tracking Solution. Set budget goals, receive real-time
                updates, and make informed decisions to ensure you get the most
                out of your travel experiences without any financial surprises.
                Travel with confidence, knowing that your expenses are
                well-managed and under control
              </Typography>
              <AppButton
                endIcon={<ArrowForwardIcon />}
                sx={{ width: { xs: "100%", md: "260px" } }}
              >
                Plan your trip
              </AppButton>
            </Stack>
            <Stack sx={{ flexGrow: "50%" }}>
              <Box
                component="img"
                src={ExpensesImage}
                alt={"Big city view."}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "810px",
                  maxHeight: "630px",
                  padding: { md: "10px 10px 10px 10px" },
                  borderRadius: "40px",
                }}
              />
            </Stack>
          </Stack>
        </Box>

        <Stack
          sx={{
            width: { md: "1720px" },
            mx: { md: "auto" },
            mb: { xs: "33px", md: "144px" },
          }}
        >
          <Stack
            alignItems={"center"}
            sx={{ mb: { xs: 2, md: 8 }, maxWidth: { md: "1720px" } }}
          >
            <Typography
              sx={{ color: Colors.primaryGreen, pb: { xs: 1 } }}
              variant="body2"
            >
              ADVANTAGES
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "40px" },
                fontWeight: "600",
                letterSpacing: "0.15px",
              }}
            >
              Why choose us?
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              maxWidth: { md: "1506px" },
              mx: { md: "auto" },
            }}
            justifyContent={"space-between"}
            alignContent={"center"}
            gap={{ xs: "24px", md: "84px" }}
          >
            <Stack
              sx={{
                maxWidth: { md: "446px" },
                display: "flex",
              }}
              alignItems={"center"}
              textAlign={"center"}
              px={{ xs: 3, md: 4 }}
              py={{ xs: 3 }}
              gap={{ xs: 2, md: 4 }}
            >
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "64px",
                  width: "64px",
                  backgroundColor: "#046AAA",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <CameraAltOutlinedIcon
                  sx={{ width: "24px", height: "24px", border: "2px" }}
                />
              </Stack>
              <Stack>
                <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
                  Keep memories from the trip
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Keeping your travel photos within your trip-planning app is
                  incredibly practical.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                maxWidth: { md: "446px" },
                display: "flex",
              }}
              alignItems={"center"}
              textAlign={"center"}
              px={{ xs: 3, md: 4 }}
              py={{ xs: 3 }}
              gap={{ xs: 2, md: 4 }}
            >
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "64px",
                  width: "64px",
                  backgroundColor: "#046AAA",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <FmdGoodOutlinedIcon
                  sx={{ width: "24px", height: "24px", border: "2px" }}
                />
              </Stack>
              <Stack>
                <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
                  Add places you want to visit
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our user-friendly tools help you plan and organize your
                  packing with ease.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                maxWidth: { md: "446px" },
                display: "flex",
              }}
              alignItems={"center"}
              textAlign={"center"}
              px={{ xs: 3, md: 4 }}
              py={{ xs: 3 }}
              gap={{ xs: 2, md: 4 }}
            >
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "64px",
                  width: "64px",
                  backgroundColor: "#046AAA",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <FolderCopyOutlinedIcon
                  sx={{ width: "24px", height: "24px", border: "2px" }}
                />
              </Stack>
              <Stack>
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: 2, mb: 3 },
                  }}
                >
                  Centralize all your documents
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Simplify Your Life by Bringing Together All Your Essential
                  Documents and Files in a Single, Easily Accessible Location.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "209px",
            mx: "auto",
            textAlign: "center",
            mb: 3,
            mt: 3,
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack sx={{ mb: { xs: 2 } }}>
            <Logo />
          </Stack>
          <Stack
            sx={{ flexDirection: "column", mx: "auto" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            <Stack
              sx={{ flexDirection: "column", mx: "auto" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ mb: { xs: 1, mb: 0.5 } }}>
                Get in touch
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Contact us anytime for getting support
              </Typography>
            </Stack>
            <Stack
              sx={{ flexDirection: "column", mx: "auto" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ mb: { xs: 1, mb: 1 } }}>
                contact@sebtravel.com
              </Typography>
              <Stack sx={{ flexDirection: "row" }} gap={1}>
                <Stack
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "32px",
                    width: "32px",
                    backgroundColor: Colors.secondaryGreen,
                    borderRadius: "4px",
                  }}
                >
                  <InstagramIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: Colors.primaryGreen,
                    }}
                  />
                </Stack>
                <Stack
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "32px",
                    width: "32px",
                    backgroundColor: Colors.secondaryGreen,
                    borderRadius: "4px",
                  }}
                >
                  <FacebookIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: Colors.primaryGreen,
                    }}
                  />
                </Stack>
                <Stack
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "32px",
                    width: "32px",
                    backgroundColor: Colors.secondaryGreen,
                    borderRadius: "4px",
                  }}
                >
                  <TwitterIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: Colors.primaryGreen,
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
