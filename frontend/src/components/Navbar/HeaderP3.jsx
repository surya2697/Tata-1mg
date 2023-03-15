import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
const HeaderP3 = () => {
  return (
    <div className="header_3Con">
      <ul className="list">
        <li>
          <Link className="link" to={"/products"}>
            Vitamins & Nutrition
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Vitamins & Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Muttivitamins</Link>
                </li>
                <li>
                  <Link to={"/products"}>Vitamins A-Z</Link>
                </li>
                <li>
                  <Link to={"/products"}>Mineral Supplements</Link>
                </li>
                <li>
                  <Link to={"/products"}>Vitamin B12 & B Complex</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Nutritional Drinks</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}>Adult Daily Nutrition</Link>
                </li>
                <li>
                  <Link to={"/products"}>Kids Nutrition (2-15 Yrs)</Link>
                </li>
                <li>
                  <Link to={"/products"}>For Women</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Health Food & Drinks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Green Tea & Herbal Tea</Link>
                </li>
                <li>
                  <Link to={"/products"}>Apple Cider Vinegar</Link>
                </li>
                <li>
                  <Link to={"/products"}>Healthy Snacks</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Protein Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Whey Protein</Link>
                </li>
                <li>
                  <Link to={"/products"}>Amino Acids</Link>
                </li>
                <li>
                  <Link to={"/products"}>Mass Gainers</Link>
                </li>
                <li>
                  <Link to={"/products"}>Workout Essential</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Omega & Fish Oi</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Adult Daily Nutrition</Link>
                </li>
                <li>
                  <Link to={"/products"}>Kids Nutrition (2-15 Yrs)</Link>
                </li>
                <li>
                  <Link to={"/products"}>For Women</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Immunity Boosters</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Chyawanprasha</Link>
                </li>
                <li>
                  <Link to={"/products"}>Vitamin C</Link>
                </li>
                <li>
                  <Link to={"/products"}>Antioxidant Supplements</Link>
                </li>
                <li>
                  <Link to={"/products"}>Ayurvedic Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Specialty Supplements</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Pre and Probiotics</Link>
                </li>
                <li>
                  <Link to={"/products"}>Glucosamine</Link>
                </li>
                <li>
                  <Link to={"/products"}>Collagen</Link>
                </li>
                <li>
                  <Link to={"/products"}>Antioxidants</Link>
                </li>
                <li>
                  <Link to={"/products"}>Biotin</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Weight Management</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Weight Management Herbs</Link>
                </li>
                <li>
                  <Link to={"/products"}>Meal Replacements</Link>
                </li>
                <li>
                  <Link to={"/products"}>Weight Gain</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Diabetes
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* Sub Menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Blood Glucose Monitors</Link>
                </li>
                <li>
                  <Link to={"/products"}>Test Strips & Lancets</Link>
                </li>
                <li>
                  <Link to={"/products"}>Syringes & Pens</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Diabetic Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Vitamins, Minerals & Antioxidants</Link>
                </li>
                <li>
                  <Link to={"/products"}>Homeopathy Medicines</Link>
                </li>
                <li>
                  <Link to={"/products"}>Ayurvedic Medicines</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Sugar Substitutes</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    {" "}
                    <strong>Diabetic Diet</strong>{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Amino Acids</Link>
                </li>
                <li>
                  <Link to={"/products"}>Juices & Vinegars</Link>
                </li>
                <li>
                  <Link to={"/products"}>Superfoods</Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Diabetic Foot Health</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Healthcare Devices
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* ========================================================== */}
          {/* sub menu */}

          <div className="subMenu_left">
            <div className="subDiv">
              <ul style={{ width: "210px" }}>
                <li>
                  <Link to={"/products"}>
                    <strong>Top brands in Healthcare Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>omron</Link>
                </li>
                <li>
                  <Link to={"/products"}>Accu-chek</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dr. Morepen Devices</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dr Trust</Link>
                </li>
                <li>
                  <Link to={"/products"}>OneTouch</Link>
                </li>
                <li>
                  <Link to={"/products"}>Contour</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Masks (N95, Surgical and more)</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}>Face Shield</Link>
                </li>
                <li>
                  <Link to={"/products"}>Surgical Masks</Link>
                </li>
                <li>
                  <Link to={"/products"}>N95 Masks</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Oxygen Concentrators & Cans</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>BP Monitors</Link>
                </li>
                <li>
                  <Link to={"/products"}>Nebulizers & Vaporizers</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul style={{ width: "220px" }}>
                <li>
                  <Link to={"/products"}>
                    <strong>Oximeters & Pedometers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Vital Signs Monitors & Wearables</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Weighing Scales</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Thermometers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>IR Thermometers</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Body Massager</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Diabetes Monitors</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Mobility Equipments</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Exercise Equipments</strong>
                  </Link>
                  <Link to={"/products"}>
                    <strong>Doctor's Corner</strong>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>Stethoscopes</Link>
                </li>
                <li>
                  <Link to={"/products"}>Tapes & Bandages</Link>
                </li>
                <li>
                  <Link to={"/products"}>Clinical Diagnostic Equipments</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dressings & Wound Care</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Supports & Braces</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Neck & Shoulder Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Knee & Leg Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Ankle & Foot Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Hand & Wrist Braces</Link>
                </li>
                <li>
                  <Link to={"/products"}>Arm & Elbow Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Cervical Pillows</Link>
                </li>
                <li>
                  <Link to={"/products"}>Compression support & sleeves</Link>
                </li>
                <li>
                  <Link to={"/products"}>Heel support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Crepe Bandage</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* =============================================================== */}
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Personal care
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* =========================================================== */}
          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Skin Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Body Lotions</Link>
                </li>
                <li>
                  <Link to={"/products"}>Mosquito Repellents</Link>
                </li>
                <li>
                  <Link to={"/products"}>Lip Balm</Link>
                </li>
                <li>
                  <Link to={"/products"}>Acne Care</Link>
                </li>
                <li>
                  <Link to={"/products"}>Bath Essentials</Link>
                </li>
                <li>
                  <Link to={"/products"}>Facewash</Link>
                </li>
                <li>
                  <Link to={"/products"}>Sanitizers & Handwash</Link>
                </li>
                <li>
                  <Link to={"/products"}>Sunscreen</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Sexual Wellness</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Condoms</Link>
                </li>
                <li>
                  <Link to={"/products"}>Lubricants & Massage Gels</Link>
                </li>
                <li>
                  <Link to={"/products"}>Personal body massagers</Link>
                </li>
                <li>
                  <Link to={"/products"}>Men Performance Enhancers</Link>
                </li>
                <li>
                  <Link to={"/products"}>Sexual Health Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Baby Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby & Infant Food</Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby Diapers, wipes & more</Link>
                </li>
                <li>
                  <Link to={"/products"}>Nursing & Feeding</Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby Bath Essentials</Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby Skin Care</Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby Healthcare</Link>
                </li>
                <li>
                  <Link to={"/products"}>Baby Oral Health</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Hair Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Shampoo</Link>
                </li>
                <li>
                  <Link to={"/products"}>Hair Conditioners</Link>
                </li>
                <li>
                  <Link to={"/products"}>Hair Oils</Link>
                </li>
                <li>
                  <Link to={"/products"}>Hair Growth Products</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Elderly Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Adult Diapers</Link>
                </li>
                <li>
                  <Link to={"/products"}>Bone & Joint Health</Link>
                </li>
                <li>
                  <Link to={"/products"}>Living & Safety Aids</Link>
                </li>
                <li>
                  <Link to={"/products"}>Orthopaedic Supports</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Women Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Women Care Supplements.</Link>
                </li>
                <li>
                  <Link to={"/products"}>Mother Care</Link>
                </li>
                <li>
                  <Link to={"/products"}>Menopause</Link>
                </li>
                <li>
                  <Link to={"/products"}>Polycystic Ovary Syndrome</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Men Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Men Grooming</Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Oral Care</strong>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Pet Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Pet Grooming</Link>
                </li>
                <li>
                  <Link to={"/products"}>Pet Food</Link>
                </li>
                <li>
                  <Link to={"/products"}>Pet Health Care</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Health Conditions
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Stomach Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Heart Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Bone, Joint & Muscle Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Pain Relief</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Heating Aids</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Ear Care</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}>Hearing Aid Devices</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>First Aid</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Liver Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>cold & Cough</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Fever</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Mental Wellness</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Kidney Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Respiratory Care</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Piles, Fissures & Fistula</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Smoking Cessation</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Derma Care</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Ayurveda Products
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Ayurveda Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Dabur</Link>
                </li>
                <li>
                  <Link to={"/products"}>Sri Sri Tattva</Link>
                </li>
                <li>
                  <Link to={"/products"}>kerala Ayurveda</Link>
                </li>
                <li>
                  <Link to={"/products"}>jiva Ayurveda</Link>
                </li>
                <li>
                  <Link to={"/products"}>Patanjali</Link>
                </li>
              </ul>
              <ul style={{ width: "190px" }}>
                <li>
                  <Link to={"/products"}>
                    <strong>Popular categories</strong>
                  </Link>{" "}
                </li>

                <li>
                  <Link to={"#"}>Herbal Juice</Link>
                </li>
                <li>
                  <Link to={"#"}>Herbal Juice</Link>
                </li>
                <li>
                  <Link to={"#"}>Chyawanparash</Link>
                </li>
                <li>
                  <Link to={"#"}>ayurvedic Immunity Boosters</Link>
                </li>
                <li>
                  <Link to={"#"}>Explore Popular Herbs</Link>
                </li>
                <li>
                  <Link to={"#"}>Herbal Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Top Health Concems</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Ayurvedic Respiratory care</Link>
                </li>
                <li>
                  <Link to={"#"}>Cough, Cold & Fever</Link>
                </li>
                <li>
                  <Link to={"#"}>Sexual Wellness</Link>
                </li>
                <li>
                  <Link to={"#"}>Bone, Joint and Muscle Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Stomach Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Diabetes Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Liver Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Mind Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Liver Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Cardiac Care</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Unani Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Hamdard Unani</Link>
                </li>
                <li>
                  <Link to={"#"}>AMU Dawakhana</Link>
                </li>
                <li>
                  <Link to={"#"}>Rex Remedies</Link>
                </li>
                <li>
                  <Link to={"#"}>Dehivi Remedies</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Homeopathy
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Homeopathy Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>SBL Homoeopathy</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Reckeweg</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Willmar Schwabe India</Link>
                </li>
                <li>
                  <Link to={"#"}>Adel Pekana</Link>
                </li>
                <li>
                  <Link to={"#"}>BAIN Homeopathy</Link>
                </li>

                <li>
                  <Link to={"#"}>Allen</Link>
                </li>
                <li>
                  <Link to={"#"}>Wheezal</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Willmar Schwabe Germany</Link>
                </li>
                <li>
                  <Link to={"#"}>Haslab</Link>
                </li>
                <li>
                  <Link to={"#"}>Medisynth</Link>
                </li>

                <li>
                  <Link to={"#"}>Boiron</Link>
                </li>
                <li>
                  <Link to={"#"}>Boiron</Link>
                </li>
                <li>
                  <Link to={"#"}>Bhandari</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Bakshi Bakson</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Batra's</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul style={{ width: "220px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Homeopathy Popular Categories</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Homeopathic Care for Cold & Cough</Link>
                </li>
                <li>
                  <Link to={"#"}>Respiratory Wellness</Link>
                </li>
                <li>
                  <Link to={"#"}>Homeopathy Covid Essentials</Link>
                </li>
                <li>
                  <Link to={"#"}>Sexual Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Hair Care Products</Link>
                </li>
                <li>
                  <Link to={"#"}>Skin Care Products</Link>
                </li>
                <li>
                  <Link to={"#"}>Children’s Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Women’s Health</Link>
                </li>

                <li>
                  <Link to={"#"}>
                    <strong>Homeopathy Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Dilutions</Link>
                </li>
                <li>
                  <Link to={"#"}>Mother Tinctures</Link>
                </li>
                <li>
                  <Link to={"#"}>Triturations</Link>
                </li>
                <li>
                  <Link to={"#"}>Bio Combinations</Link>
                </li>
                <li>
                  <Link to={"#"}>Millesimal LM Potencies</Link>
                </li>
                <li>
                  <Link to={"#"}>Biochemics</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Featured
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "190px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Flash Deals</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Tata 1 mg Health Products</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Monsoon Store</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Trending now</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>New Arrivals on Tata 1MG</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Minimum 33% Off</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Popular Combo Deals</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Deals of the Day</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Accu-Chek</Link>
                </li>
                <li>
                  <Link to={"#"}>Ensure</Link>
                </li>
                <li>
                  <Link to={"#"}>Revital</Link>
                </li>
                <li>
                  <Link to={"#"}>Optimum Nutrition (ON)</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr. Morepen</Link>
                </li>
                <li>
                  <Link to={"#"}>Pediasure</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Super savings</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Covid Essentials
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "235px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Covid-19 Self test kits</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Oxygen Cans & Concentrators Masks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Masks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Sanitizers & Handwash Products</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Support Your Immunity</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Thermometer</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Chyawanprash</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Health Resource Center
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "200px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>All Disesases</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>All Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Medicines by Therapeutic Class</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
      </ul>
    </div>
  );
};

export default HeaderP3;