package com.example.mind_optimizers_android_app;



import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class BMIActivity extends AppCompatActivity {

    TextView registerUser;
    EditText Weight, Height;
    Button CalculateButton;
    String user, pass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bmi);

        // registerUser = findViewById(R.id.register);
        Weight = findViewById(R.id.weight);
        Height = findViewById(R.id.height);
        CalculateButton = findViewById(R.id.calculatebmi);


        CalculateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*user = Weight.getText().toString();
                pass = Height.getText().toString();

                Double w = (Double)user;

                 */

                double w = Double.parseDouble(Weight.getText().toString());
                double h = Double.parseDouble(Height.getText().toString());
                double temp = w / (h * h);


                if(temp < 18.0){
                    // Toast.makeText(BMIActivity.this, "Underweight", Toast.LENGTH_LONG).show();
                    Intent settingsIntent = new Intent(BMIActivity.this, UnderweightActivity.class);
                    settingsIntent.putExtra("BMI", temp);
                    // Start the new activity
                    startActivity(settingsIntent);
                }


                if(temp > 18.0 && temp <=25) {
                    //Toast.makeText(BMIActivity.this, "Normal", Toast.LENGTH_LONG).show();
                    Intent settingsIntent = new Intent(BMIActivity.this, NormalActivity.class);
                    settingsIntent.putExtra("BMI", temp);
                    // Start the new activity
                    startActivity(settingsIntent);
                }
                if(temp >25) {
                    // Toast.makeText(BMIActivity.this, "Overweight", Toast.LENGTH_LONG).show();
                    Intent settingsIntent = new Intent(BMIActivity.this, OverweightActivity.class);
                    settingsIntent.putExtra("BMI", temp);
                    // Start the new activity
                    startActivity(settingsIntent);
                }


            }
        });
    }
}
