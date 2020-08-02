package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

public class HealthActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_health);
        TextView numbers = (TextView) findViewById(R.id.bmi);

        // Set a click listener on that View
        numbers.setOnClickListener(new View.OnClickListener() {
            // The code in this method will be executed when the numbers category is clicked on.
            @Override
            public void onClick(View view) {
                // Create a new intent to open the {@link NumbersActivity}
                Intent numbersIntent = new Intent(HealthActivity.this, BMIActivity.class);

                // Start the new activity
                startActivity(numbersIntent);
                Toast.makeText(view.getContext(),"Calculate your BMI",Toast.LENGTH_SHORT).show();

            }
        });

        // Find the View that shows the family category
        TextView family = (TextView) findViewById(R.id.heart_rate);

        // Set a click listener on that View
        family.setOnClickListener(new View.OnClickListener() {
            // The code in this method will be executed when the family category is clicked on.
            @Override
            public void onClick(View view) {
                // Create a new intent to open the {@link FamilyActivity}
                Intent familyIntent = new Intent(HealthActivity.this, HeartRateActivity.class);

                // Start the new activity
                startActivity(familyIntent);
                Toast.makeText(view.getContext(),"Calculate your heart rate",Toast.LENGTH_SHORT).show();

            }
        });

        TextView tempreature = (TextView) findViewById(R.id.tempreature);

        // Set a click listener on that View
        tempreature.setOnClickListener(new View.OnClickListener() {
            // The code in this method will be executed when the family category is clicked on.
            @Override
            public void onClick(View view) {
                // Create a new intent to open the {@link FamilyActivity}
                Intent tempreatureIntent = new Intent(HealthActivity.this, TempreatureActivity.class);

                // Start the new activity
                startActivity(tempreatureIntent);
                Toast.makeText(view.getContext(),"Measure your Tempreature",Toast.LENGTH_SHORT).show();

            }
        });
    }
}
